import React from 'react'
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Clints from '../Clints/Clints';
import Footer from '../Footer/Footer';

import Navbar from '../NavBar/Navbar';
import ProductFeature from '../ProductFeatures/ProductFeature';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <ProductFeature/>
      <AboutUs/>
      <Clints/>
      <Footer/>
    </div>
  )
}

export default Home