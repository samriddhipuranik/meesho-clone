import React, { useEffect } from 'react'
import Navs from '../components/Navbar/Navs'
import Product from '../components/Products/Product'
import HomeAds from '../components/HomeAds/HomeAds'
import { Helmet } from 'react-helmet';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (


        <div>
            <Helmet>
                <title>Online Shopping Site for Fashion</title>
                <link rel="icon" type="image/png" href="Images/meesho logo.png" />
            </Helmet>
            <Navs />
            <HomeAds />
            <Product />
        </div>
    )
}

export default Home
