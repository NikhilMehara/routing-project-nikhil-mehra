import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../pages/About'
import Cart from '../pages/Cart'
import ContactUs from '../pages/ContactUs'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'
import { PrivateRoute } from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<About />} />
             <Route path='/cart' element={<Cart />} />
             <Route path='/faq' element={<FAQ />} />
             <Route path='/contactus' element={<ContactUs />} />
             <Route path='/login' element={<Login />} />
             <Route path='/products' element={<PrivateRoute><Products /></PrivateRoute>} />
             <Route path='/products/:id' element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        </Routes>
    </div>
  )
}

export default AllRoutes