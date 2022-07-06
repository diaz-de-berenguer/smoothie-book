import { ApolloServer } from "apollo-server";
import { readFileSync } from 'fs';
import { resolve } from 'path';

const PORT = process.env.PORT || 4000; // Could be moved to ENV varible
const typeDefs = readFileSync(resolve(__dirname, './schema.graphql'), 'utf-8');
const server = new ApolloServer({
  typeDefs,
  // resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});