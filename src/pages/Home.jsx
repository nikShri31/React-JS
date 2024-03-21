import React from 'react'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import Slider from '../components/Slider'
import { Categories } from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Offers/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default Home
