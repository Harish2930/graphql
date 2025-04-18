import express from "express";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema";
import dotenv from 'dotenv';
import { connectDB } from "./database/database";
import { getAllUsers, getUserById } from "./controllers/user";
import { getAllCourses, getCourseById } from "./controllers/course";

dotenv.config({path:'./.env'}); // Load environment variables from .env file
const PORT = Number(process.env.PORT) || 8000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/"; // MongoDB URI

connectDB(mongoURI); // Connect to MongoDB
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query:{
      users: getAllUsers,
      courses: getAllCourses,
      course: getCourseById,
      // lectures:
    },
    Course:{
      instructor: async (course) => {
        return await getUserById(course.instructor);
      }
    }
  },
});

startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
} ); 