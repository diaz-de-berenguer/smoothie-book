import { addRating, insertSmoothie } from '../data/smoothie';

import { MutationResolvers } from '../graphql-types';
import { resetData } from '../data';

const Mutation: MutationResolvers = {
  createSmoothie: (_, { input }) => insertSmoothie(input),
  addRating: (_, { smoothieId, value }) => addRating(smoothieId, value),
  resetData: () => resetData(),
};

export default Mutation;
