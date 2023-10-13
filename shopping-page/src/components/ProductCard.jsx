/* eslint-disable react/prop-types */
import { useState } from "react";
import '../styles/ProductCard.css'

function ProductCard({product}){
    const [isClicked, setIsClicked] = useState(false);
    return(
        <div className="card">
            <img src={product.image} alt="Product Image" width="150" height="150"></img>
            <h5>{product.title}</h5>
            <h3>${product.price}</h3>
            <button> Add To Cart </button>
        </div>
    )
}

export default ProductCard;