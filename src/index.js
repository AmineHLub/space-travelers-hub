import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import rocketStore from './Redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={rocketStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
