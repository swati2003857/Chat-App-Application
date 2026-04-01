import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
    httpOnly: true,
    sameSite: "lax",   // ✅ Changed from "strict" for better compatibility
    secure: false,     // ✅ Must be false on localhost
  });

  return token; // Return token for API testing
};

export default generateTokenAndSetCookie;