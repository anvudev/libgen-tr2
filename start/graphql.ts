// server.ts (Apollo thuần, không Adonis)
import resolvers from "#graphql/resolvers/author_resolver";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";

const typeDefs = readFileSync("./app/graphql/schema.graphql", "utf8");

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: 3334 },
}).then(({ url }) => {
  console.log(`🚀 Apollo ready at ${url}`);
});