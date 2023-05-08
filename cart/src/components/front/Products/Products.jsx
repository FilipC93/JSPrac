import React from "react";
import { Box, Text, Button, Image } from "@chakra-ui/react";
import './Products.css'

const Products = ({ productItems, handleCartToggle }) => {
    return (
        <Box className="products">
            {productItems.map((productItem, index) => {
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
                        {productItem.isAdded ? (
                            <Text id="product-added-label">
                                <Text as={'span'} id="tick-icon">&#10003;</Text>
                                Added to cart
                            </Text>
                        ) : (
                            <Button id="product-button" onClick={() => handleCartToggle(index)}>
                                <Text>
                                    Add to Cart
                                </Text>
                            </Button>
                        )}
                    </Box>
                );
            })}
        </Box>
    );
}

export default Products;