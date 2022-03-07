import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';

function Product() {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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

        <button onClick={handleDelete}>Delete this Product</button>
      </article>
      <Link to={`/product/${id}/edit`}>Edit</Link>
      <article>
        <Link to={'/'}>
          <button>Homepage </button>
        </Link>
      </article>
    </div>
  );
}

export default Product;
