import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
        console.log(`Database Host: ${mongoose.connection.host}`);
    });

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

export default connectDB;
