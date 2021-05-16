import "./Navbar.css"
import { Link } from "react-router-dom"


const Navbar = ({ itemCart }) => {
    return (
        <div id="navbar">
            <h2>Logo</h2>
            <ul id="linkList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/store">Store</Link>
                </li>
                <li>
                    <Link to="/cart">
                        {itemCart.length > 0 ? `Cart (${itemCart.length})` : 'Cart'}
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar