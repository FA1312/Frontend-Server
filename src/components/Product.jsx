import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import apiService from '../services/api.service';

function Product() {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

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

  return (
    <div>
      <article>
        <p>{productDetail.name}</p>
        <p>{productDetail.description}</p>
        <p>{productDetail.price}</p>
        <p>{productDetail.shipping}</p>
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
