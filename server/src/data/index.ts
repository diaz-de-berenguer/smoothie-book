// MOCK DATABASE

import { Ingredient, Recipe, Smoothie } from '../graphql-types';
import { addRating, insertSmoothie } from './smoothie';

import getTestData from './get-test-data';

export enum Tables {
  smoothie = 'smoothie',
  recipe = 'recipe',
  ingredient = 'ingredient',
  ratings = 'ratings',
}

interface DB {
  tables: {
    [Tables.smoothie]: Smoothie[];
    [Tables.ingredient]: Ingredient[];
    [Tables.recipe]: Recipe[];
    [Tables.ratings]: Map<string, Array<number>>;
  };
  indices: {
    [index: string]: Set<string>;
  };
}

const db: DB = {
  tables: {
    [Tables.smoothie]: [],
    [Tables.ingredient]: [],
    [Tables.recipe]: [],
    [Tables.ratings]: new Map(),
  },
  indices: {
    'smoothie-name': new Set<string>(),
  },
};

const clearData = (): void => {
  db.tables = {
    [Tables.smoothie]: [],
    [Tables.ingredient]: [],
    [Tables.recipe]: [],
    [Tables.ratings]: new Map(),
  };
  db.indices = {
    'smoothie-name': new Set<string>(),
  };
};

export const resetData = (): Promise<boolean> => {
  clearData();
  const testData = getTestData();
  testData.map((newSmoothie) => {
    const { id } = insertSmoothie(newSmoothie);
    newSmoothie.ratings.forEach((rating) => addRating(id, rating));
  });
  // Unnecessary Delay -- just used to test the "Loading" state
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true);
      rej(false);
    }, 1500);
  });
};

export default db;
