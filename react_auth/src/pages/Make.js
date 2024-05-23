import '../App.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../config/AxiosConfig';

const Make = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [resData, setResData] = useState(null)
    const [data, setData] = useState(null);
    const [flag, setFlag] = useState(false);
    const [delPopup, setDelPopup] = useState(false)

    useEffect(() => {
        
        if(delPopup){
            toast.success('Make Deleted');
            setDelPopup(false)
        }
        else if (location.state && location.state.message) {
            toast.success(location.state.message);
            navigate('/make', {state: ''})
        }

        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/crud/make');
                setResData(response.data.data)
                setData(response.data.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };
        fetchData();

    }, [flag, location.state]); 

    const deleteRecord = async (id) =>{
        try{
            const res = await axiosInstance.delete(`/crud/make?id=${id}`)
            if (res){
                setDelPopup(true)
                setFlag(!flag)
            }
            else{
                console.log('Got no Response')
            }
        }
        catch(error){
            console.log('error', error)
        }
    }

    const updateRecord = async (item) =>{
        navigate('/make/update', {state: {data : item}})
    }



  return (
    <div className="container">
        <h1>Make page</h1>

        <Link to="/make/add" className='button'> Add New </Link>
        <br/>

        <div className="listing">
            {resData ? (<p>Records: {resData.count}</p>) : (<p>Records: 0</p>)}
            { data ? (
                data.map(item => (
                <div className="card" key={item.id}>
                    <h6>{item.name}</h6>
                    <p>{item.created_at}</p>
                <button class='btn btn-danger' onClick={() => deleteRecord(item.id)}>Delete</button>
                <button class='btn btn-danger' onClick={() => updateRecord(item)}>Update</button>
            </div>
                ))
            ) : (
                <p>Loading</p>
            )}
        </div>
            <ToastContainer />
    </div>
  )
}

export default Make