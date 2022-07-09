import { SmoothieResolvers } from '../graphql-types';
import { getSmoothieRecipe } from '../data/recipe';

const Smoothie: SmoothieResolvers = {
  recipe: ({ id }) => getSmoothieRecipe(id),
};

export default Smoothie;
