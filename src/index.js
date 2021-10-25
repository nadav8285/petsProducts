import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ProductsList from './ProductsData'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsList>
        <App />
      </ProductsList>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

