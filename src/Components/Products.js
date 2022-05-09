import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <input type='search' placeholder='Search Products'/>
      <nav className ='secondary-nav'>
          <Link to='featured'>Featured</Link>
          <Link to='new'>New</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Products
