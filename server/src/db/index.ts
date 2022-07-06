// MOCK DATABASE

import { Ingredient, Recipe, Smoothie } from "../graphql-types"

export enum Tables {
  smoothie = 'smoothie',
  recipe = 'recipe',
  ingredient = 'ingredient'
}

interface DB {
  tables: {
    [Tables.smoothie]: Smoothie[];
    [Tables.ingredient]: Ingredient[];
    [Tables.recipe]: Recipe[];
  },
  indices: {
    [index: string]: Set<string>;
  }
}

const db: DB = {
  tables: {
    [Tables.smoothie]: [],
    [Tables.ingredient]: [],
    [Tables.recipe]: []
  },
  indices: {
    'smoothie-name': new Set<string>(),
  }
}

export default db;