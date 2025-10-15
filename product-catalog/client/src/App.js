import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // The empty array ensures this effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <h1>Computer Peripherals Catalog</h1>
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;