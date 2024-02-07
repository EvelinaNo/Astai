import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import { ProductList } from '../components/ProductList'
import NavBar from '../components/NavBar'
import { Routes, Route } from 'react-router-dom'
import { Contacts } from '../components/Contacts'
import Homepage from '../components/Homepage'

function App() {

  return (
    <>
      <NavBar/>
<Routes>
  <Route path='/home' element= {<Homepage />}/>
<Route path='/products' element={ <ProductList />}/>
<Route path='/kontaktai' element={ <Contacts />}/>
</Routes>
    </>
  )
}

export default App
