import React, { useState } from "react";
import './Products.css'

const Products = ({ productItems }) => {
    const [cartToggle, setCartToggle] = useState(false);

    const handleCartToggle = () => {
        cartToggle ? setCartToggle(false) : setCartToggle(true)
    }

    return (
        <div className="products">
            {productItems.map(productItem => (
                <div className="card">
                    <img className="product-image"
                        src={productItem.image}
                        alt={productItem.name}
                    />
                    <div>
                        <h3 className="product-name">{productItem.name}</h3>
                    </div>
                    <div className="product-price">{productItem.price}€</div>
                    <div>
                        <button className="product-button" onClick={handleCartToggle}>
                            {cartToggle ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Products;