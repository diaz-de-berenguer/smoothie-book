import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import AddTestDataButton from './components/ResetDataButton';
import Page from './components/Page';
import Router from './Router';

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:4000/';

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Page>
        <h1>Heeeellooo</h1>
        <AddTestDataButton />
        <Router />
      </Page>
    </ApolloProvider>
  );
}

export default App;
