import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Products from './components/Products'
import Banner from './components/Banner'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Header/>  
        <Banner/> 
        <Products/>
        <Partners/>
        <Footer/>
    </>
  )
}

export default App
