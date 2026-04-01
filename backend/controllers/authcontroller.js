import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utills/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://i.pravatar.cc/150?img=12`;
    const girlProfilePic = `https://i.pravatar.cc/150?img=9`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    const token = generateTokenAndSetCookie(newUser._id, res);

    console.log("save successfully....");

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
      token: token, // Include token for API testing
    });

  } catch (error) {
    console.log("FULL ERROR:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    console.log("Login API hit");

    const { username, password } = req.body;

    // ✅ Check input
    if (!username || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    // ✅ Find user
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    // ✅ Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Wrong password" });
    }

    // ✅ Generate token
    const token = generateTokenAndSetCookie(user._id, res);

    // ✅ Send response (VERY IMPORTANT)
    return res.status(200).json({
      message: "Login successful",
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
      token: token, // Include token for API testing
    });

  } catch (error) {
    console.log("Error in login controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0), // remove cookie
    });

    res.status(200).json({ message: "Logged out successfully" }); // ✅ MUST
  } catch (error) {
    console.log("Logout error:", error);
    res.status(500).json({ error: "Internal Server Error" }); // ✅ MUST
  }
};