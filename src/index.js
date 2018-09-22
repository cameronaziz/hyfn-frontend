import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import client from './apollo';
import './index.css';

const Application = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(
  Application(),
  document.getElementById('root') || document.createElement('div'),
);
registerServiceWorker();

export default Application;
