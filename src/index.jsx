import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Logo, BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { App } from './components/App/app';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
