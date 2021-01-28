import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux'

import App from './components/App';
import store from './redux/store'
import { getAllDogBreeds } from './redux/thunks'

getAllDogBreeds()(store.dispatch)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
