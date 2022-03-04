function AllProducts({ name, description, price, category, photo, shipping }) {
  return (
    <article>
      <h2>{name}</h2>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}€</p>
      </div>
      <div>
        <p>{category}</p>
        <p>This is a picture of the product{photo}</p>
        <p>Shipping? {shipping}</p>
      </div>
    </article>
  );
}

export default AllProducts;
