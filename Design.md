# Smoothie Book

[Full-stack application](https://diaz-de-berenguer.github.io/smoothie-book/)

## Definitions

- Smoothie: Item that is being delivered when following recipe.
- Recipe: A set of ingredients and instructions for making a Smoothie.
- Ingredient: An item required in a recipe.
- Instruction: A set of steps to follow to complete recipe.
- Rating: The average value submitted by users (from 1 - 10)

## High Level Tools

### Typescript

- Using typescript for type safety and easy debugging

### Linting

- Using prettier for linting

### Graphql Codegen

- Uses GraphQL schema to generate typescript interfaces and types

### Deployment

- The backend is deployed to Heroku: https://smoothie-book-server.herokuapp.com/

## Backend Service

### Apollo Server

- The backend application uses an apollo server to provide a Graphql API

### Data

- The Data is stored in memory

## Frontend UI

### Create react app

- A single page application is being used in this project.

### Apollo Client

- Apollo Client is used to query the backend Graphql API

### Material UI

- Using this component library to facilitate development of UI components

## Data Sources

| Table | Fields |
|---|---|
| smoothie | { id: string, name: string } |
| ingredient | { id: string, name: string, quantity: string, recipeId: string } |
| recipe | { id: string, smoothieId: string } |
| ratings | { smoothieId: string, value: int } |

## Queries

- getSmoothies(limit: Int, page: Int): SmoothieConnection!
- getSmoothie(id: ID!): Smoothie

## Mutations

- createSmoothie(input: NewSmoothie!): Smoothie!
- deleteSmoothie(smoothieId: ID!): Smoothie!
- addRating(smoothieId: ID!, value: Int!): Smoothie!
- resetData: Boolean!

## Next Steps

### Database

- A persistant data store could be added to the backend.

### Optimize Server Deployment

- The current deployment requires devDependencies. This process could be improved

### Add Unit & Integration Tests

- This application should have both unit and integration tests. These could be implemented
  with Jest or a similar JS testing framework

### Form Validation

- It would be useful for the user to understand the form requirements, this can be done
  by adding validation in the front-end.

### Directives for Auth

- The current API is open. Graphql Directives could be added to provide an authorization layer.
