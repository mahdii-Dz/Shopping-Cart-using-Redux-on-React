import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>  
        <nav className='flex justify-between items-center px-24 mt-16'>
            <Link to='/' className='text-3xl font-semibold'>Redux Shopping Cart</Link>
            <div>
                <Link to='/' className='font-semibold mr-4'>Home</Link>
                <Link to='/cart' className='font-semibold '>Cart</Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar