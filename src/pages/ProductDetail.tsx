import { Link, useParams } from "react-router-dom"

function ProductDetail() {

  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Your Selected Product is {id}</p>
      <Link to=".." relative="path">Back</Link>
    </div>
  )
}

export default ProductDetail