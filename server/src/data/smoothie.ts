import {
  Ingredient,
  InputMaybe,
  Maybe,
  NewIngredient,
  NewSmoothie,
  Rating,
  Recipe,
  Smoothie,
  SmoothieConnection,
} from '../graphql-types';
import db, { Tables } from './index';

import { v4 } from 'uuid';

function assertUniqueName(name: string) {
  if (db.indices['smoothie-name'].has(name.toLowerCase())) {
    throw new Error(`Invalid name, ${name} already exists`);
  }
}

function assertNotEmpty({ name, ingredients }: NewSmoothie) {
  const errors: Array<string> = [];
  const blankIngredients =
    ingredients.length === 0 ||
    ingredients.some((i) => {
      if (!i) {
        return true;
      }
      const { name, quantity } = i;
      return name.length === 0 || quantity.length === 0;
    });
  if (name.length === 0) {
    errors.push(`Name can't be blank`);
  }
  if (blankIngredients) {
    errors.push(`Ingredients can't be blank`);
  }
  if (errors.length > 0) {
    throw new Error(`Invalid input: ${errors.join(', ')}`);
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

export function getSmoothies(limit: number, page: number): SmoothieConnection {
  const smoothies = db.tables.smoothie;
  return {
    totalCount: smoothies.length,
    nodes: smoothies.slice((page - 1) * limit, page * limit),
  };
}

export function getSmoothie(_id: string): Maybe<Smoothie> {
  const smoothies = db.tables.smoothie;
  return smoothies.find(({ id }) => id === _id) || null;
}

export function insertSmoothie({ name, ingredients, instructions }: NewSmoothie): Smoothie {
  assertUniqueName(name);
  assertNotEmpty({ name, instructions, ingredients });
  const id = v4();
  const smoothie: Smoothie = {
    id,
    name,
  };
  db.tables[Tables.smoothie].unshift(smoothie);
  db.indices['smoothie-name'].add(name.toLowerCase());
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

export function addRating(smoothieId: string, rating: number): Smoothie {
  const smoothie = getSmoothie(smoothieId);
  if (!smoothie) {
    throw new Error(`Unable to find smoothie for given id: ${smoothieId}`);
  }
  if (!db.tables.ratings.has(smoothieId)) {
    db.tables.ratings.set(smoothieId, []);
  }
  (db.tables.ratings.get(smoothieId) || []).push(rating);
  return smoothie;
}

export function getRating(smoothieId: string): Rating {
  const ratings = db.tables.ratings.get(smoothieId) || [];
  const count = ratings.length;
  let value;
  if (count > 0) {
    value = Math.ceil(ratings.reduce<number>((acc, val) => acc + val, 0) / count);
  }
  return {
    value,
    count,
  };
}

export function deleteSmoothie(smoothieId: string): Smoothie {
  const index = db.tables.smoothie.findIndex(({ id }) => id === smoothieId);
  const smoothie = db.tables.smoothie[index];
  if (!smoothie) {
    throw new Error(`Unable to find smoothie for given id: ${smoothieId}`);
  }
  if (!db.tables.ratings.has(smoothieId)) {
    db.tables.ratings.delete(smoothieId);
  }
  db.indices['smoothie-name'].delete(smoothie.name);
  db.tables.smoothie.splice(index, 1);
  return smoothie;
}
