const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://Admin:h92j-l19w-7v9u@pokedex.3u5iudk.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;
const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(MONGODB)
.then(() => {
  console.log("Successfully connected to MongoDB Server");
  return server.listen(PORT);
})
.then((res) => {
  console.log(`🚀 Server is running at ${res.url}`);
})