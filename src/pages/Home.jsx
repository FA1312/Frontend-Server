import { useEffect, useState } from 'react';
import apiService from '../services/api.service';
import AllProducts from '../components/AllProducts';
import { Link } from 'react-router-dom';
import { RiHeartAddLine } from 'react-icons/ri';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineRateReview } from 'react-icons/md';
import '../css/app.css';

function Home() {
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
      <div className="dropdown"></div>
      <div>
        <input className="searchbar" placeholder="Search for cariño" onChange={event => setQuery(event.target.value)} />

        {products
          .filter(product => {
            if (query === '') {
              return product;
            } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
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
      <div className="add">
        <Link to={`/product/add`}>Add a product</Link>{' '}
        <icons className="addicon">
          <RiHeartAddLine />
        </icons>
      </div>
      <div className="add">
        <Link to={`/about`}>About</Link>{' '}
        <icons className="addicon">
          <FcAbout />
        </icons>
      </div>
      <div className="add">
        <Link to={`/reviews`}>Reviews</Link>{' '}
        <icons className="addicon">
          <MdOutlineRateReview />
        </icons>
      </div>
    </div>
  );
}

export default Home;
