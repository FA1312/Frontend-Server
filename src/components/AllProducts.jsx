import { Link } from 'react-router-dom';

function AllProducts({ id, name, category, photo }) {
  return (
    <div>
      <h2>
        <Link to={`/product/${id}`}>{name}</Link>
      </h2>

      <div>
        <p>{category}</p>
        <img src={photo} alt={name} />
      </div>
    </div>
  );
}

export default AllProducts;
