import { useContext } from "react";
import { ShopContext } from "../App";
import ProductCard from "../components/productCard";
import '../styles/shop.css'
const Shop = () => {
    const {prodData} = useContext(ShopContext);
    const displayCards = prodData.map((product) => 
        <div key={product.id}>
        <ProductCard product={product} />
        </div>);
    return (
        <div className="all">
        <h2>Shop</h2>
        <div className="shop">
            {displayCards}
        </div>
        </div>
    );
};

export default Shop;