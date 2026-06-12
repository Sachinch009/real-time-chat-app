import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        try {
            await mongoose.connection.db.collection("users").dropIndex("email_1");
            console.log("Dropped leftover 'email_1' index successfully.");
        } catch (err) {
            // Index might not exist, which is fine
        }
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;