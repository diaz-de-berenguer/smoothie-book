import { MutationResolvers } from '../graphql-types';
import { clearData } from '../data';
import { insertSmoothie } from '../data/smoothie';

const Mutation: MutationResolvers = {
  createSmoothie: (_, { input }) => insertSmoothie(input),
  clearData: () => clearData(),
};

export default Mutation;
