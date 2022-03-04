import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import AllProducts from '../components/AllProducts';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    apiService
      .getAllProducts()
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Home</h1>

      {products.map(product => {
        return (
          <AllProducts
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            catgeory={product.category}
            photo={product.photo}
            shipping={product.shipping}
          />
        );
      })}
    </div>
  );
}

export default Home;
