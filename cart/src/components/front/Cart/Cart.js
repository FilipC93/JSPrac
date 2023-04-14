import React from "react";
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import './Cart.css'

const Cart = ({ cartQuantity }) => {
    return (
        <Flex className="cart-items">
            {cartQuantity?.length > 0 && (
                <Flex className="cart-items-header">
                    <Flex>
                        Cart Items: {cartQuantity.length}
                    </Flex>
                </Flex>
            )}
            {cartQuantity?.length === 0 && (
                <Box className="cart-items-empty">
                    No items are added.
                </Box>
            )}
            <Box>
                {cartQuantity?.map((item, index) => {
                    return (
                        <Flex key={index} className="cart-items-list">
                            <Image className="cart-items-image" src={item.image} alt={item.name} />
                            <Text>{item.name}</Text>
                        </Flex>
                    )
                })}
            </Box>
        </Flex>
    );
}

export default Cart;