import {useState} from 'react'
import '../App.css'
import { useNavigate } from "react-router-dom";
import axiosInstance from '../config/AxiosConfig';



const Make = () => {

  const [make, setMake] = useState('')
  let navigate = useNavigate()
  console.log(make)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/crud/make', {"name":make}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data);

      // history.push('/make')
        return navigate('/make', {state : {message: 'Make Added!'}})
      // Handle success
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div className='form'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label for="make">Make</label>
          <input type="text" id="make" name="make" placeholder="Enter Make"
           value={make}
           onChange={e=> setMake(e.target.value)}/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    </div>
  )
}

export default Make