import {React} from 'react'
import axiosInstance from '../config/AxiosConfig'
import { useNavigate } from 'react-router-dom'


const VechileCard = ({item, flag, handleFlag, handlePopup}) => {

    const navigate = useNavigate()

    const deleteRecord = async (id) =>{
        try{
            const res = await axiosInstance.delete(`/crud/vechile?id=${id}`)
            if (res){
                handleFlag(!flag)
                handlePopup(false)
            }
            else{
                console.log('Got no Response')
            }
        }
        catch(error){
            console.log('error', error)
        }
        console.log('delete Record')
    }

    const updateRecord = async (itemId) =>{
        navigate('/vehicle/update', {state: {data : itemId}})
    }

  return (
    <div className="card">
        <h4>{item.name}</h4>
        <p>{item.model} | {item.color}</p>
        <p>{item.created_at}</p>
        <button class='btn btn-danger' onClick={() => deleteRecord(item.id)}>Delete</button>
        <button class='btn btn-danger' onClick={() => updateRecord(item)}>Update</button>
    </div>
  )
}


export default VechileCard