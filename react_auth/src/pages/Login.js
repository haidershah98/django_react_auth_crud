import '../App.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';




const Login = () => {
    const navigate = useNavigate()

    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/user/login', {"username":username, "password":password}, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //     if (response.status === 200){
  //       navigate('/home', {state : {message: 'Logged in!'}})
  //     }
  //     else{
  //       toast.success('response.data.data.message');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://localhost:8000/user/login', { username, password });
      if (response){
        login(response.data.data.token);
        navigate('/', {state: {message: "Logged in!"}})
      }
    }
    catch (error){
      toast.error('Invalid Credentials')

      console.log(error)
    }
    
  };

  return (
    <div className='form'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="username"
           value={username}
           onChange={e=> setUsername(e.target.value)}/>

        <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="password"
           value={password}
           onChange={e=> setPassword(e.target.value)}/>
          <input type="submit" value="Login"/>
        </form>
      </div>
      <ToastContainer />

    </div>
  )
}

export default Login