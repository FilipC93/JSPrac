import React, { useState } from 'react'
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import RoutesOne from './components/front/routes/RoutesOne';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
    const { productItems } = data;
    const [cartQuantity,
        // setCartQuantity
    ] = useState([])
    return (
        <div>
            <ChakraProvider>
                <Router>
                    <Header />
                    <RoutesOne productItems={productItems} cartQuantity={cartQuantity} />
                </Router>
            </ChakraProvider>
        </div>

    );
};

export default App;
//* on 29:42