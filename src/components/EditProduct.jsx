import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/api.service';
import { FcFlashOn } from 'react-icons/fc';
import { FcIdea } from 'react-icons/fc';

function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    photo: '',
    shipping: '',
  });
  const navigate = useNavigate();

  const getProductById = async () => {
    const response = await apiService.getThisProduct(id);
    setProduct(response.data);
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  const handleOnChange = e => {
    setProduct(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    apiService
      .updateProduct(product._id, {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        photo: product.photo,
        shipping: product.shipping,
      })
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="edit-product">
      <h1>
        In this page you can modify the product
        <icons className="addicon">
          <FcFlashOn />
        </icons>
      </h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={product.name} onChange={handleOnChange} />

        <label>Description</label>
        <input type="text" name="description" value={product.description} onChange={handleOnChange} />

        <label>Price</label>
        <input type="text" name="price" value={product.price} onChange={handleOnChange} />

        <label>Category</label>
        <input type="text" name="category" value={product.category} onChange={handleOnChange} />

        <label>Photo</label>
        <input type="text" name="photo" value={product.photo} onChange={handleOnChange} />

        <label>Shipping</label>
        <input type="text" name="shipping" value={product.shipping} onChange={handleOnChange} />

        <button type="submit">
          Click to Update!{' '}
          <icons className="addicon">
            <FcIdea />
          </icons>{' '}
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
