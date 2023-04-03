import React from "react";
import Products from "../Products/Products";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import { Box } from "@chakra-ui/react";

const RoutesOne = ({ productItems }) => {
    return (
        <Box>
            <Routes>
                <Route path="/" exact element={<Products productItems={productItems} />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/cart" exact element={<Cart cartQuantity={productItems} />} />
            </Routes>
        </Box>
    );
};

export default RoutesOne;