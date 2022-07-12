# Smoothie Book

[Full-stack application](https://diaz-de-berenguer.github.io/smoothie-book/)

## Start (Development)

To start the application you will need the server running in
port 4000, as well as the client running on port 3000.

### Start Server

Install dependencies

```sh
cd ./server
npm install
```

Start the server

```sh
npm run dev
```

### Start Client

Install dependencies

```sh
cd ../client
npm install
```

Start the client

```sh
npm start
```

You should now be able to navigate to http://localhost:3000/ to view
the application.

## Deployment

The backend code can be deployed after committing the changes by running:

```sh
cd ./server
npm run deploy
```

For deploying changes to the client, the following script can be used

```sh
cd ../client
npm run deploy
```

## Develop

### Server

When working on the server, Typescript Types are generated from the
schema.graphql file. When a change is made to this file, the following
script should be ran

```sh
npm run generate
```

### Client

On client side, Types are generated from the queries that are defined by
the \*\*.gql files. When these are updated, please run the following command

```sh
npm run generate
```

## Design

For more information about the architecture and design, please see [Design.md](https://github.com/diaz-de-berenguer/smoothie-book/blob/master/Design.md)
