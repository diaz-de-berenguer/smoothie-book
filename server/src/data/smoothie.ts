import {
  Ingredient,
  InputMaybe,
  Maybe,
  NewIngredient,
  NewSmoothie,
  Recipe,
  Smoothie,
} from '../graphql-types';
import db, { Tables } from './index';

import { v4 } from 'uuid';

function assertUniqueName(name: string) {
  if (db.indices['smoothie-name'].has(name)) {
    throw new Error('Invalid name, already exists');
  }
}

function parseIngredients(
  ingredients: InputMaybe<NewIngredient>[],
  recipeId: string
): Ingredient[] {
  return ingredients.reduce<Ingredient[]>((result, ingredient) => {
    if (ingredient) {
      result.push({
        id: v4(),
        recipeId,
        ...ingredient,
      });
    }
    return result;
  }, []);
}

export function getSmoothies(limit: number, page: number): Smoothie[] {
  const smoothies = db.tables.smoothie;
  return smoothies.slice((page - 1) * limit, page * limit);
}

export function getSmoothie(_id: string): Maybe<Smoothie> {
  const smoothies = db.tables.smoothie;
  return smoothies.find(({ id }) => id === _id) || null;
}

export function insertSmoothie({ name, ingredients, instructions }: NewSmoothie): Smoothie {
  assertUniqueName(name);
  const id = v4();
  const smoothie: Smoothie = {
    id,
    name,
  };
  db.tables[Tables.smoothie].push(smoothie);
  db.indices['smoothie-name'].add(name);
  const recipeId = v4();
  const recipe: Recipe = {
    id: recipeId,
    smoothieId: id,
    instructions,
  };
  db.tables[Tables.recipe].push(recipe);
  db.tables[Tables.ingredient].push(...parseIngredients(ingredients, recipeId));

  return smoothie;
}
