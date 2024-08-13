// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log('API response:', response);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again later.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Landing Page</h1>
      </header>
      <div className="product-list">
        {error && <p className="error">{error}</p>}
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
