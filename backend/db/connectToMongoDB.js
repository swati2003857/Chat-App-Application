import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
        let uri = process.env.MONGO_DB_URI;
        if (!uri) {
            console.log("Error: MONGO_DB_URI is not defined in environment.");
            return;
        }

        // sanitize: trim whitespace and remove surrounding quotes if present
        uri = uri.trim().replace(/^"|"$/g, '').replace(/^'|'$/g, '');

        // basic validation
        if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
            console.log(
                "Error: Invalid MongoDB connection string. Expected scheme 'mongodb://' or 'mongodb+srv://'.",
                `Provided value (first 200 chars): ${uri.substring(0,200)}`
            );
            return;
        }

        await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
        console.log("Connected to MongoDB");
    }catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;