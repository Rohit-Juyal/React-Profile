import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Outlet } from 'react-router-dom'

function Reads() {
  return (
    <>
    <nav className='reads-nav'>
      <h3><NavLink to='books'>Books</NavLink></h3>
      <h3><NavLink to='articles'>Articles</NavLink></h3>
    </nav>
    <Outlet />
    </>
  )
}

export default Reads