import { Link } from 'react-router-dom';

function AllProducts({ id, name, category, photo }) {
  return (
    <div className="product-card">
      <h4>
        <Link to={`/product/${id}`}>{name}</Link>
      </h4>

      <div>
        <p>{category}</p>
        <img src={photo} alt={name} />
      </div>
    </div>
  );
}

export default AllProducts;
