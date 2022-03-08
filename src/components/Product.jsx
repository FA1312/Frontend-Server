import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';

function Product() {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    apiService
      .getThisProduct(id)
      .then(product => {
        setProductDetail(product.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = async () => {
    try {
      await apiService.deleteProduct(id);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productDetail);
  return (
    <div>
      <article>
        <p>{productDetail.name}</p>
        <p>{productDetail.description}</p>
        <p>{productDetail.price} €</p>
        <p>{productDetail.shipping ? 'We can ship the item' : 'Unfortunately the item cannot be shipped'}</p>
        <div className>
          <img src={productDetail.photo} alt={productDetail.name} />
        </div>
      </article>
      <div>
        {isLoggedIn && (
          <>
            <Link to={`/product/${id}/edit`}>Edit</Link>
          </>
        )}
      </div>
      <div>
        {isLoggedIn && (
          <>
            <button onClick={handleDelete}>Delete this Product</button>
          </>
        )}
      </div>
      <Link to={'/'}>
        <button>Homepage </button>
      </Link>
    </div>
  );
}

export default Product;
