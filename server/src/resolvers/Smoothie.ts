import { SmoothieResolvers } from '../graphql-types';
import { getRating } from '../data/smoothie';
import { getSmoothieRecipe } from '../data/recipe';

const Smoothie: SmoothieResolvers = {
  recipe: ({ id }) => getSmoothieRecipe(id),
  rating: ({ id }) => getRating(id),
};

export default Smoothie;
