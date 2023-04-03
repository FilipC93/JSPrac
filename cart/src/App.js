import React from 'react'
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import RoutesOne from './components/front/routes/RoutesOne';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';

const App = () => {
    const { productItems } = data;
    
    return (
        <Box>
            <ChakraProvider>
                <Router>
                    <Header />
                    <RoutesOne productItems={productItems} />
                </Router>
            </ChakraProvider>
        </Box>
    );
};

export default App;
//* on 29:42