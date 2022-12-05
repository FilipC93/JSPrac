import React, { useState } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import './Products.css'

const Products = ({ productItems }) => {
    const [cartToggle, setCartToggle] = useState(false);

    const handleCartToggle = () => {
        cartToggle ? setCartToggle(false) : setCartToggle(true)
    }

    return (
        <Box className="products">
            {productItems.map(productItem => (
                <Box className="card">
                    <Image className="product-image"
                        src={productItem.image}
                        alt={productItem.name}
                    />
                    <Box>
                        <Text as={'h3'} className="product-name">{productItem.name}</Text>
                    </Box>
                    <Box className="product-price">{productItem.price}€</Box>
                    <Box>
                        <Button id="product-button" onClick={handleCartToggle}>
                            {cartToggle ? 'Added to Cart' : 'Add to Cart'}
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Products;