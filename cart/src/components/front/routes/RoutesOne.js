import React from "react";
import Products from "../Products/Products";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";

const RoutesOne = ({ productItems, cartQuantity }) => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={<Products productItems={productItems} />}></Route>
                <Route path="/login" exact element={<Login />}></Route>
                <Route path="/cart" exact element={<Cart cartQuantity={cartQuantity} />}></Route>
            </Routes>
        </div>
    );
};

export default RoutesOne;