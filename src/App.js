import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReacotronConfig';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  </Provider>
);

export default App;
