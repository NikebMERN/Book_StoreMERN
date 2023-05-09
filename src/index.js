import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserProvider from './config/UserConfigeration';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <UserProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </UserProvider>,
  document.getElementById('root')
);
