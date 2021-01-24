import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductPage from './Pages/Product/Product';

const App = () => {
    return (
        <>
            <Header/>
            <ProductPage />
            <Footer />
        </>
    )
};

export default App;
