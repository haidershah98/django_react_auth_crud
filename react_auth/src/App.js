import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import {Routes, Route } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute';

import Make from './pages/Make'
// import Main from './pages/Main'
import Vehicle from './pages/Vehicle'

import AddMake from './pages/AddMake'
import AddVehicle from './pages/AddVehicle'
import UpdateVehicle from './pages/UpdateVechile'
import UpdateMake from './pages/UpdateMake'


import {AuthContext} from './context/AuthContext'
import { useContext } from 'react';

function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="App">
      {
        user ? <Navbar/> : <p></p>
      }

    
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        {/* <Route path='/login' element={<Login/>}/>

        <ProtectedRoute path="/" component={<Home/>} /> */}

        <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path='/make' element={<Make/>}/>
            <Route path='/make/add' element={<AddMake/>}/>
            <Route path='/make/update' element={<UpdateMake/>}/>

            <Route path='/vehicle' element={<Vehicle/>}/>
            <Route path='/vehicle/add' element={<AddVehicle/>}/>
            <Route path='/vehicle/update' element={<UpdateVehicle/>}/>
          </Route>

      </Routes>
    </div>
  );
}

export default App;
