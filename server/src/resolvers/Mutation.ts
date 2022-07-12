import { addRating, deleteSmoothie, insertSmoothie } from '../data/smoothie';

import { MutationResolvers } from '../graphql-types';
import { resetData } from '../data';

const Mutation: MutationResolvers = {
  createSmoothie: (_, { input }) => insertSmoothie(input),
  deleteSmoothie: (_, { smoothieId }) => deleteSmoothie(smoothieId),
  addRating: (_, { smoothieId, value }) => addRating(smoothieId, value),
  resetData: () => resetData(),
};

export default Mutation;
