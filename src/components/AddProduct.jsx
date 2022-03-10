import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import { MdProductionQuantityLimits } from 'react-icons/md';

function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    photo: '',
    shipping: '',
  });

  const navigate = useNavigate();

  const handleForm = e => {
    setForm(previous => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    apiService
      .addProduct(form)
      .then(response => {
        console.log(response);
        navigate(`/`);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="addProduct">
      <h1>
        Add A Product to the store
        <icons className="addicon">
          <MdProductionQuantityLimits />
        </icons>
      </h1>

      <div className="addLabels">
        <form onSubmit={handleSubmit}>
          <label>What is the name of the product?</label>
          <input type="text" name="name" value={form.name} onChange={handleForm} />
          <label>What is the product about?</label>
          <input type="text" name="description" value={form.description} onChange={handleForm} />
          <label>Price</label>
          <input type="text" name="price" value={form.price} onChange={handleForm} />
          <label>Which category is the product?</label>
          <input type="text" name="category" value={form.category} onChange={handleForm} />
          <label>Upload a picture of your product</label>
          <input type="text" name="photo" value={form.photo} onChange={handleForm} />
          <label>Can you ship the product?</label>
          <input type="text" name="shipping" value={form.shipping} onChange={handleForm} />

          <button type="submit">Add New Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
