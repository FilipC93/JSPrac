import React, { useState } from "react";
import Products from "../Products/Products";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import { Box } from "@chakra-ui/react";

const RoutesOne = ({ productItems }) => {
    const [addToCart, setAddToCart] = useState([]);

    const handleCartToggle = value => {
        let updatedCart = [];
        if (addToCart.includes(value)) {
            updatedCart = addToCart.filter(item => item !== value)
        } else {
            updatedCart = [...addToCart, {
                image: productItems[value].image,
                name: productItems[value].name,
                isAdded: productItems[value].isAdded = true
            }];
        }
        setAddToCart(updatedCart);
    };
    return (
        <Box>
            <Routes>
                <Route path="/"
                    exact element={
                        <Products
                            productItems={productItems}
                            handleCartToggle={handleCartToggle} />
                    } />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cart" exact element={<Cart cartQuantity={addToCart} />} />
            </Routes>
        </Box>
    );
};

export default RoutesOne;