import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import AllProducts from '../components/AllProducts';
import { Link } from 'react-router-dom';

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
      <h1>Welcome to Meraki</h1>
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
      <div>
        <Link to={`/product/add`}>Add a product</Link>
      </div>
    </div>
  );
}

export default Home;
