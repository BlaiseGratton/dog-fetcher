import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'fontsource-roboto'
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container'

import App from './components/App';
import store from './redux/store'
import { getAllDogBreeds } from './redux/thunks'

getAllDogBreeds()(store.dispatch)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Container fixed>
        <App />
      </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
