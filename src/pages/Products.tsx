import { Link } from "react-router-dom";

function Products() {

  const products = ["Product-1", "Product-2", "Product-3", "Product-4", "Product-5"];

  return (
    <>
      <h1>My Products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>
            <Link to={product}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
