import React, { useState } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import './Products.css'

const Products = ({ productItems }) => {
    const [addToCart, setAddToCart] = useState([]);
    const handleCartToggle = value => {
        let updatedCart = [];
        if (addToCart.includes(value)) {
            updatedCart = addToCart.filter(item => item !== value)
        } else {
            updatedCart = [...addToCart, value];
        }
        setAddToCart(updatedCart);
    };

    return (
        <Box className="products">
            {productItems.map((productItem, index) => {
                const isAddedToCart = addToCart.includes(index);
                return (
                    <Box className="card" key={index}>
                        <Image className="product-image"
                            src={productItem.image}
                            alt={productItem.name}
                        />
                        <Box>
                            <Text as={'h3'} className="product-name">{productItem.name}</Text>
                        </Box>
                        <Box className="product-price">{productItem.price}€</Box>
                        <Button
                            id={isAddedToCart ?
                                "product-button-added" : "product-button"}
                            onClick={() => handleCartToggle(index)}>
                            <Text>
                                {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                            </Text>
                        </Button>
                    </Box>
                )
            })}
        </Box>
    );
}

export default Products;