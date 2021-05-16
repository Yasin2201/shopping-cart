import './styles/Navbar.css'
import { Link } from "react-router-dom"
import logo from "./images/logo.png"


const Navbar = ({ itemCart }) => {
    const companyLogo = logo
    return (
        <div id="navbar">
            <div>
                <img id="logo" src={companyLogo} alt="SneakerShop" />
            </div>
            <ul id="linkList">
                <li>
                    <Link to="/shopping-cart">Home</Link>
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
        </div >
    )
}

export default Navbar