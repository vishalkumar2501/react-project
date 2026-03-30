import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'  
import './App.css'
import News from './components/News'

function App() {
  return (
    <div className='w-full min-h-screen bg-black text-2xl text-amber-500'>
      <Header/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App