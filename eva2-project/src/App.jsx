import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import { ProductList } from '../components/ProductList'
import NavBar from '../components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { Contacts } from '../components/Contacts'
import Homepage from '../components/Homepage'
import Product from '../components/Product'
import { ProductDetails } from '../components/ProductDetails'
import { AddNewProduct } from '../components/AddNewProduct'

function App() {

  return (
    <>
      <NavBar />
<Routes>
  <Route path='/' element={<Homepage />}/>
  <Route path='/home' element= {<Homepage />}/>
<Route path='/products' element={ <ProductList />}/>
<Route path='/product/:id' element={<ProductDetails />}/>
<Route path='/kontaktai' element={ <Contacts />}/>
<Route path='/pridetinaujaprodukta' element={ <AddNewProduct />}/>
</Routes>
    </>
  )
}

export default App
