import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home/Component';
import {Provider} from 'react-redux';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

render(
  <Provider store={Store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
