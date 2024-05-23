import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <navbar class="navbar">
        <div class="container">
           <ul>
            <li><Link to="/a">A</Link></li>
            <li><Link to="/b">B</Link></li>
            <li><Link to="/c">C</Link></li>
            <li><Link to="/d">D</Link></li>

           </ul>
        </div>
    </navbar>
    </>
  )
}

export default Navbar