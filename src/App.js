import React from 'react';
import { ApolloProvider } from 'react-apollo';
import AppContainer from './AppNavigator';

import client from './config/client';

const App = () => (
  <ApolloProvider client={client}>
    <AppContainer />
  </ApolloProvider>
);

export default App;
