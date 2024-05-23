import React, {useContext} from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';



const Navbar = () => {

  const { logout } = useContext(AuthContext);

  return (
    <>
    <navbar class="navbar">
        <div class="container">
            <div class="logo"><Link to='/'>Home</Link></div>
           <ul>
           <li><Link to="/make">Make</Link></li>
            <li><Link to="/vehicle">Vechiles</Link></li>
            
            <li><Link onClick={logout}>logout</Link></li>


            {/* <li><Link to="/Home">Vechiles</Link></li> */}
           </ul>
        </div>
    </navbar>
    </>
  )
}

export default Navbar