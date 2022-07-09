import { MutationResolvers } from '../graphql-types';
import { insertSmoothie } from '../data/smoothie';

const Mutation: MutationResolvers = {
  createSmoothie: (_, { input }) => insertSmoothie(input),
};

export default Mutation;
