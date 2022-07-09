import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import resolvers from './resolvers';

const PORT = process.env.PORT || 4000;
const typeDefs = readFileSync(resolve(__dirname, './schema.graphql'), 'utf-8');
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ footer: false })],
});

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
