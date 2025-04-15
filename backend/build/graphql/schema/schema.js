"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = `#graphql

type User {
  _id: ID!
  name: String!
  email: String!
  password: String
  googleId: String
  role: String!
  avatar: String!
  verified: Boolean!
  createdAt: String!
  updatedAt: String!
}

type Query {
  hello: String,
  users:[User],
}
  `;
