import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import { MdLocalShipping } from 'react-icons/md';

import { FcMoneyTransfer } from 'react-icons/fc';

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

  return (
    <div className="container-detail">
      <article>
        <h2>{productDetail.name}</h2>
        <p>- {productDetail.description}</p>

        <p>
          {productDetail.shipping ? 'We can ship the item ' : 'Unfortunately the item cannot be shipped'}
          <icons className="addicon">
            <MdLocalShipping />
          </icons>
        </p>
        <div>
          <img src={productDetail.photo} alt={productDetail.name} />
        </div>
        <p className="price">
          Price: {productDetail.price} €{' '}
          <icons className="addicon">
            <FcMoneyTransfer />
          </icons>
        </p>
      </article>
      <div className="edit-delete">
        <div>
          {isLoggedIn && (
            <>
              <p className="editLink">
                {' '}
                <Link to={`/product/${id}/edit`}>Edit</Link>{' '}
              </p>
            </>
          )}
          {!isLoggedIn && (
            <>
              <p className="likeIt">Do you like it?</p>
            </>
          )}
        </div>
        <div>
          {isLoggedIn && (
            <>
              <button className="deleteBtn" onClick={handleDelete}>
                Delete this Product
              </button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <p className="contactUs">@contact us</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
