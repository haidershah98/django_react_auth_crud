import '../App.css'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axiosInstance from '../config/AxiosConfig';
import VechileCard from '../components/VechileCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vechile = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [resData, setResData] = useState(null)
    const [data, setData] = useState(null);
    const [flag, setFlag] = useState(false)
    const [deletePopup, setDeletePopup] = useState(false)


    useEffect(() => {

        if (deletePopup){
            toast.success("Vehicle Deleted")
            setDeletePopup(false)
        }
        else if (location.state && location.state.message){
            toast.success(location.state.message)
            navigate('/vehicle', {state: ''})
        }

        const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/crud/vechile');
            setResData(response.data.data)
            setData(response.data.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, [flag, location.state]); 

    const handleFlagFromChild = (bool) => {
        setFlag(bool)
    }

    const handleDeletePopup = (bool) => {
        setDeletePopup(true)
    }

  return (
    <div className="container">
        <h1>Vechile page</h1>

        <Link to="/vehicle/add" className='button'> Add New </Link>
        <br/>

        <div className="listing">
            {data ? (<p>Records: {resData.count}</p>) : (<p>Records: 0</p>)}
            { data ? (
                data.map(item => (
                    <VechileCard item={item} flag={flag} handleFlag={handleFlagFromChild} handlePopup={handleDeletePopup}/>
                ))
            ) : (
                <p>No Records :)</p>
            )}
        </div>

        <ToastContainer />
    </div>
  )
}

export default Vechile