import { resolve } from 'path';
import { GraphQLServer } from 'graphql-yoga';

const typeDefs = resolve(__dirname, 'schema.graphql');
const resolvers = {
  Query: {
    users: () => [...USERS],
  },
};

const USERS = [
  { id: 1, name: 'Marcus' },
  { id: 2, name: 'Agatha' },
];

const server = new GraphQLServer({ resolvers, typeDefs });

export default server;
