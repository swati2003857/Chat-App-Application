import User from "../models/usermodel.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    console.log("Logged In User:", loggedInUserId);
    console.log("Users Found:", filteredUsers.length);

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUserForSidebar:", error.message);

    res.status(500).json({
      error: "Internal server error",
    });
  }
};