import { Link } from "react-router-dom";
import { ShoppingCart, House, Storefront } from "@phosphor-icons/react";
import "../styles/NavBar.css"
function NavBar(){
    return (
        <div className="navBar">
            <div className="links">
                <Link to="/"> <House size={40} /></Link>
                <Link to="/shop"> <Storefront size={40} /> </Link>
                <Link to="/cart"> <ShoppingCart size={40}/> </Link>
            </div>
        </div>
    );
}

export default NavBar;