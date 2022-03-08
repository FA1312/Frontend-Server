import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import AllProducts from '../components/AllProducts';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiService
      .getAllProducts()
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const filter = searchWord => {
    if (searchWord === '') {
      setProducts(products);
    } else {
      setProducts(products.filter(product => product.name.toLowerCase().includes(searchWord.toLowerCase())));
    }
  };

  const handleReset = () => {
    location.reload();
  };

  if (loading) return null;

  return (
    <div>
      <h1>Welcome to Meraki</h1>
      <div>
        <SearchBar filter={filter} handleReset={handleReset} />
      </div>
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
      <div>
        <Link to={`/about`}>About</Link>
      </div>
    </div>
  );
}

export default Home;
