import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import AllProducts from '../components/AllProducts';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiService
      .getAllProducts()
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <h2>This is AllProducts list</h2>
      {products.map(product => {
        return (
          <AllProducts
            key={product._id}
            id={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            category={product.category}
            photo={product.photo}
            shipping={product.shipping}
          />
        );
      })}
    </div>
  );
}

export default Home;
