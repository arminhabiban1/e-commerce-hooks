import React from 'react'
import {Link} from'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-evenly mt-2 pt-4'>
      <Link to='/'>Home</Link>
      <Link to='/basket'>Basket</Link>
    </div>
  )
}

export default Navbar
