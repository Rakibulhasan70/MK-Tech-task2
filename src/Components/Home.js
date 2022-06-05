import React from 'react';
import About from './About';
import Banner from './Banner';
import Client from './Client';
import Products from './Products';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Client></Client>
            <About></About>
        </div>
    );
};

export default Home;