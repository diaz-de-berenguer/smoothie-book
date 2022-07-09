import { Ingredient, Maybe, Recipe } from '../graphql-types';

import db from '.';

export function getSmoothieRecipe(_smoothieId: string): Maybe<Recipe> {
  const recipes = db.tables.recipe;
  return recipes.find(({ smoothieId }) => smoothieId === _smoothieId) || null;
}

export function getRecipeIngredients(_recipeId: string): Maybe<Ingredient[]> {
  const ingredients = db.tables.ingredient;
  return ingredients.filter(({ recipeId }) => recipeId === _recipeId) || null;
}
