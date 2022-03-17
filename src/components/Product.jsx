import { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context';
import { MdLocalShipping } from 'react-icons/md';
import { FaRegKissWinkHeart } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';

function Product() {
  const titleRef = useRef();
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    apiService
      .getThisProduct(id)
      .then(product => {
        setProductDetail(product.data);
        window.scrollTo({ behavior: 'smooth', top: titleRef.current.offsetTop });
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <h2 id={productDetail.name} ref={titleRef}>
          {productDetail.name}
        </h2>
        <p>{productDetail.description}</p>

        <p className="shipping">
          {productDetail.shipping ? 'We can ship the item ' : 'Unfortunately the item cannot be shipped'}
          <span className="addicon">
            <MdLocalShipping />
          </span>
        </p>
        <div>
          <img src={productDetail.photo} alt={productDetail.name} />
        </div>
        <p className="price">
          Price: {productDetail.price} €{' '}
          <span className="addicon">
            <FcMoneyTransfer />
          </span>
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
              <p className="contactUs">
                @contact us &nbsp;
                <span className="addicon">
                  <FaRegKissWinkHeart />
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
