import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import AddTestDataButton from './components/ResetDataButton';

const SERVER_URL = 'https://smoothie-book-server.herokuapp.com/';

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <header className="App-header">
        <h1>Heeeellooo</h1>
        <AddTestDataButton />
      </header>
    </ApolloProvider>
  );
}

export default App;
