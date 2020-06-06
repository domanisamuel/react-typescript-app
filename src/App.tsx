import * as React from 'react';

import  { ApolloProvider } from '@apollo/react-hooks'
import  ApolloClient from 'apollo-boost'

import Home from './Components/Home'

const client = new ApolloClient({ uri:'https://872cb.sse.codesandbox.io/' })

function App() {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  )
}

export default App;