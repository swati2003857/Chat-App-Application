import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

const protectRoute =  async (req,res,next) => {
    try {
        let token = req.cookies.jwt;

        // Also check Authorization header for Bearer token (for API testing)
        if (!token && req.headers.authorization) {
            const authHeader = req.headers.authorization;
            if (authHeader.startsWith('Bearer ')) {
                token = authHeader.split(' ')[1];
            } else {
                token = authHeader;
            }
        }

        // Support an explicit token header and query parameter for clients like Thunder Client
        if (!token && req.headers['x-access-token']) {
            token = req.headers['x-access-token'];
        }

        if (!token && req.query.token) {
            token = req.query.token;
        }

        if(!token) {
            return res.status(401).json({error:"Unauthorized: No Token Provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({error:"Unauthorized: Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) {
            return res.status(401).json({error:"Unauthorized: User Not Found"});
        }

        req.user = user;
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware:",error.message)
        res.status(500).json({error:"Internal server error"});
    }
}

export default protectRoute;