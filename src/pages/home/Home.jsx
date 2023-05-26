import React from 'react';
import Banner from '../shared/Banner';
import Category from './Category';
import Gallery from './Gallery';
import useTitle from '../../Title/Title';
import Services from './Services';
import ContactUs from './ContactUs';



const Home = () => {
    useTitle("Home")
    return (
        <div className=' w-[90%] mx-auto'>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Services></Services>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;