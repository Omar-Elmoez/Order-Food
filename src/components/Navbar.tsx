import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar