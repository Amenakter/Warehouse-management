import React from 'react';
import Contact from '../../Contact/Contact';
import Service from '../../Service/Service';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventoies';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Inventories></Inventories>
            <About></About>
            <Contact></Contact>
            <Service></Service>



        </div>
    );
};

export default Home;