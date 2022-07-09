import { getSmoothie, getSmoothies } from '../data/smoothie';

import { QueryResolvers } from '../graphql-types';

const Query: QueryResolvers = {
  getSmoothies: (_, { limit, page }) => getSmoothies(limit, page),
  getSmoothie: (_, { id }) => getSmoothie(id),
};

export default Query;
