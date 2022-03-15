import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import AllProducts from '../components/AllProducts';
import { Link } from 'react-router-dom';
import { RiHeartAddLine } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineRateReview } from 'react-icons/md';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import '../css/app.css';

function Home() {
  const { isLoggedIn } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    apiService
      .getAllProducts()
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <div>
        <input
          className="searchbar"
          placeholder="Search by category or name"
          onChange={event => setQuery(event.target.value)}
        />

        {products
          .filter(product => {
            if (query === '') {
              return product;
            } else if (
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase())
            ) {
              return product;
            }
          })
          .map(product => {
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
      {isLoggedIn && (
        <div className="add">
          <Link to={`/product/add`}>Add a product</Link>{' '}
          <span className="addicon">
            <RiHeartAddLine />
          </span>
        </div>
      )}

      <div className="add">
        <Link to={`/about`}>About</Link>{' '}
        <span className="addicon">
          <FcAbout />
        </span>
      </div>
      <div className="add">
        <Link to={`/reviews`}>Reviews</Link>{' '}
        <span className="addicon">
          <MdOutlineRateReview />
        </span>
      </div>
    </div>
  );
}

export default Home;
