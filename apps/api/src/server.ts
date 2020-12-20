import { resolve } from 'path';
import { GraphQLServer } from 'graphql-yoga';

const typeDefs = resolve(__dirname, 'schema.graphql');
const resolvers = {
  Query: {
    users: () => USERS,
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      const { data } = args;
      const user = {
        ...data,
        id: USERS.length + 1,
      };
      USERS.push(user);
      return user;
    },
  },
};

const USERS = [
  { id: 1, name: 'João', email: 'joao@mail.com' },
  { id: 2, name: 'Maria', email: 'maria@mail.com' },
];

const server = new GraphQLServer({ resolvers, typeDefs });

export default server;
