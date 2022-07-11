import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Router from './Router';
import Theme from './Theme';

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:4000/';

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <Router />
      </Theme>
    </ApolloProvider>
  );
}

export default App;
