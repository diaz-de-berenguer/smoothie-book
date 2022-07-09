import { RecipeResolvers } from '../graphql-types';
import { getRecipeIngredients } from '../data/recipe';

const Recipe: RecipeResolvers = {
  ingredients: ({ id }) => getRecipeIngredients(id),
};

export default Recipe;
