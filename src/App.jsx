import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import ProductListPage from './pages/ProductListPage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/product' element={<ProductListPage/>}/>
      </Routes>
    </>
  )
}

export default App
