import express from "express";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import { schema } from "./graphql/schema/schema";
import dotenv from 'dotenv';
import { connectDB } from "./database/database";
import { User } from "./models/userModel";

dotenv.config({path:'./.env'}); // Load environment variables from .env file
const PORT = Number(process.env.PORT) || 8000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/"; // MongoDB URI

connectDB(mongoURI); // Connect to MongoDB
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query:{
      hello: () => `Hey there!, I am graphql server running on port ${PORT}`,
      users: async () => {
        const users = await User.find();
        console.log(users);
        return users;
      }
    }
  },
});

startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
} ); 