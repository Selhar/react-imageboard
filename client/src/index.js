import React from 'react';
import {render} from 'react-dom';
import Home from './components/Home/Component';
import {Provider} from 'react-redux';
import Store from './store';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './style.css';

render(
  <Provider store={Store}>
    <Router>
      <div>
        <Route path="/" component={Home}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
