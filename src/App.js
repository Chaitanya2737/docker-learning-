import React, { useEffect, useState } from 'react';
import { getProduct } from './api/api';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProduct();
        setProducts(result);
      } catch (err) {
        setError('Failed to fetch products');
        console.error('Error in App component:', err);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="App">
      <h1>Product List</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.productName}</li> 
        ))}
      </ul>
    </div>
  );
}

export default App;
