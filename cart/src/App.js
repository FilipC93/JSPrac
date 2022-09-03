import React from 'react'
import data from './components/back/Data/Data';
import Header from './components/front/Header/Header';
import RoutesOne from './components/front/routes/RoutesOne';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
    const { productItems } = data;
    return (
        <div>
            <Router>
                <Header />
                <RoutesOne productItems={productItems} />
            </Router>
        </div>
    );
};

export default App;