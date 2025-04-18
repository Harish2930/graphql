"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./graphql/schema/schema");
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database/database");
const user_1 = require("./controllers/user");
const course_1 = require("./controllers/course");
dotenv_1.default.config({ path: './.env' }); // Load environment variables from .env file
const PORT = Number(process.env.PORT) || 8000;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/"; // MongoDB URI
(0, database_1.connectDB)(mongoURI); // Connect to MongoDB
const server = new server_1.ApolloServer({
    typeDefs: schema_1.schema,
    resolvers: {
        Query: {
            users: user_1.getAllUsers,
            courses: course_1.getAllCourses,
            course: course_1.getCourseById
        },
        Course: {
            instructor: (course) => __awaiter(void 0, void 0, void 0, function* () {
                return yield (0, user_1.getUserById)(course.instructor);
            })
        }
    },
});
(0, standalone_1.startStandaloneServer)(server, {
    listen: { port: PORT },
}).then(({ url }) => {
    console.log(`🚀 Server ready at: ${url}`);
});
