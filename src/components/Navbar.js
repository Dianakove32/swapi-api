import React from 'react'
import { Link } from 'react-router-dom'
import '../App.scss'


export default function Navbar() {
    return (
        <ul className="Navbar">

        {/* <Link  className="Navbar-link" to='/'> <li>home</li></Link> */}

        <Link className="Navbar-link" to='/characterList'> <li> chatacterList</li></Link>
           <Link className="Navbar-link" to='/weather'> <li> weather</li></Link>
        <Link  className="Navbar-link" to='/character'> <li> chatacter </li></Link>

        </ul>
    )
}

