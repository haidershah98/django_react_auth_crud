import {useState} from 'react'
import '../App.css'
import { useNavigate, useLocation } from "react-router-dom";
import axiosInstance from '../config/AxiosConfig';



const UpdateMake = () => {
    const location = useLocation()
    const {data} = location.state

  const [make, setMake] = useState(data.name)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.patch(`/crud/make?id=${data.id}`, {"name":make}, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Response:', response.data);

      return navigate('/make', {state : {message: 'Make Updated!'}})

    } catch (error) {
      console.error('Error:', error);
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
          <input type="submit" value="Update"/>
        </form>
      </div>
    </div>
  )
}

export default UpdateMake