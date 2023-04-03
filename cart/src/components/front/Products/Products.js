import React, { useState } from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import './Products.css'

const Products = ({ productItems }) => {
    const [cartToggle, setCartToggle] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState();

    const handleCartToggle = value => {
        cartToggle ? setCartToggle(false) : setCartToggle(true)
        setSelectedIndex(value)
    }

    return (
        <Box className="products">
            {productItems.map((productItem, index) => (
                <Box className="card" key={index}>
                    <Image className="product-image"
                        src={productItem.image}
                        alt={productItem.name}
                    />
                    <Box>
                        <Text as={'h3'} className="product-name">{productItem.name}</Text>
                    </Box>
                    <Box className="product-price">{productItem.price}€</Box>
                    <Box>
                        <Button id="product-button" onClick={() => handleCartToggle(index)}>
                            {cartToggle && selectedIndex === index ? 'Added to Cart' : 'Add to Cart'}
                        </Button>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Products;