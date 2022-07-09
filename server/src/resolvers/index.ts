import Mutation from './Mutation';
import Query from './Query';
import Recipe from './Recipe';
import { Resolvers } from '../graphql-types';
import Smoothie from './Smoothie';

const resolvers: Resolvers = {
  Mutation,
  Query,
  Recipe,
  Smoothie,
};

export default resolvers;
