import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <ul className="Navbar">

        <Link to='/'> <li>home</li></Link>
        <Link to='/weather'> <li> weather</li></Link>
        <Link to='/characterList'> <li> chatacterList</li></Link>
        <Link to='/character'> <li> chatacter </li></Link>

        </ul>
    )
}

