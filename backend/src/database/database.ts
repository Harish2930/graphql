import mongoose from "mongoose";

export const connectDB = async (uri: string) => {
  try {
    const connection = await mongoose.connect(uri, { dbName: 'graphql' });
    console.log(`✅ MongoDB connected with DB: ${connection.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Optional: exit if the DB connection fails
  }
};
