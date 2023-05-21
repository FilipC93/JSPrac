import React, { useState } from "react";
import Products from "../Products/Products";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import { Box } from "@chakra-ui/react";

const RoutesOne = ({ productItems }) => {
    //TODO: Find solution for rerendering component with correct labels.
    const [addToCart, setAddToCart] = useState([]);
    const handleCart = index => {
        let updatedCart = [];
        if (!addToCart.includes(index)) {
            updatedCart = [...addToCart, {
                image: productItems[index].image,
                name: productItems[index].name,
                isAdded: productItems[index].isAdded = true
            }];
        }
        setAddToCart(updatedCart);
    };

    const removeFromCart = index => {
        const existingCart = [...addToCart];
        const removedItem = existingCart[index];
        removedItem.isAdded = false;
        existingCart.splice(index, 1);
        setAddToCart(existingCart);
    };

    return (
        <Box>
            <Routes>
                <Route path="/"
                    exact element={
                        <Products
                            productItems={productItems}
                            handleCart={handleCart} />
                    } />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cart" exact element={<Cart
                    cartQuantity={addToCart}
                    removeFromCart={removeFromCart} />
                } />
            </Routes>
        </Box>
    );
};

export default RoutesOne;