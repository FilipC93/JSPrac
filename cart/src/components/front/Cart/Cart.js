import React from "react";
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import './Cart.css'

const Cart = ({ cartQuantity }) => {
    //TODO: Add functionality to remove cartItem.
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
            {cartQuantity?.map((item, index) => {
                return (
                    <Flex key={index} className="cart-items-list">
                        <Flex justifyContent={'center'}>
                            <Image className="cart-items-image" src={item.image} alt={item.name} />
                        </Flex>
                        <Text textAlign={'center'}>{item.name}</Text>
                        <Button id="cart-remove-button">Remove</Button>
                    </Flex>
                )
            })}
        </Flex>
    );
}

export default Cart;