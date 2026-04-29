import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    

    <div className='nav'>
        <h1>Vishal</h1>

        <div className='nav2'>
        <Link to='/' > Home</Link>
        <Link to='/About'>About</Link>
        </div>
        
    </div>
  )
}

export default Navbar