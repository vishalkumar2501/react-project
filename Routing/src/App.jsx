import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Home/>} />
          <Route path='/About' element={<About/>} />
          
        </Routes>
       </BrowserRouter>
    )
}

export default App