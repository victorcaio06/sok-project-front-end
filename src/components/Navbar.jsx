import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={`/`}><h2>Søk</h2></Link>
    </nav>
  )
}

export default Navbar