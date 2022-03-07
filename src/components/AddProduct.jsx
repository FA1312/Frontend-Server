import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';

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
    <div>
      <h1>Add A Product to the store</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={form.name} onChange={handleForm} />
        <label>Description</label>
        <input type="text" name="description" value={form.description} onChange={handleForm} />
        <label>Price</label>
        <input type="text" name="price" value={form.price} onChange={handleForm} />
        <label>Category</label>
        <input type="text" name="category" value={form.category} onChange={handleForm} />
        <label>Photo</label>
        <input type="text" name="photo" value={form.photo} onChange={handleForm} />
        <label>Shipping</label>
        <input type="text" name="shipping" value={form.shipping} onChange={handleForm} />

        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
