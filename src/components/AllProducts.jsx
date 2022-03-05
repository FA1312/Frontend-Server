import { Link } from 'react-router-dom';

function AllProducts({ id, name, category, photo, shipping }) {
  return (
    <div>
      <h2>
        <Link to={`/product/${id}`}>{name}</Link>
      </h2>

      <div>
        <p>{category}</p>
        <p>This is a picture of the product{photo}</p>
        <p>Shipping? {shipping}</p>
      </div>
    </div>
  );
}

export default AllProducts;
