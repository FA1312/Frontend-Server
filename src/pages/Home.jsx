import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import { Link } from 'react-router-dom';

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
      <div className="all-prods">
        {products.map(product => (
          <div className="card" key="product._id">
            <Link
              to={`/${product._id}`}
              style={{
                textDecoration: 'none',
              }}
            >
              <div className="product-pic">
                <img src={product.photo} alt={product.name} />
              </div>
              <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
