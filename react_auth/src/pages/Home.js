import React, {  useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    if (location.state && location.state.message){
      toast.success(location.state.message)
      navigate('/', {state: ""})
    }
  }, [location.state])
  

  return (
    <div class='container'>
        <h1>Hello, Welcome to Django React CRUD App</h1>


      <ToastContainer />
    </div>
  )
}

export default Home