import {useState, useEffect} from 'react'
import axiosInstance from '../config/AxiosConfig'
 
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css'

const UpdateVehicle = () => {

    const location = useLocation()
    const {data} = location.state



  const navigate = useNavigate()
  const [name, setName] = useState(data.name)
  const [make, setMake] = useState(data.make['id'])
  const [model, setModel] = useState(data.model)
  const [color, setColor] = useState(data.color)
  const [purchaseRate, setPurchaseRate] = useState(data.purchase_rate)
  const [price, setPrice] = useState(data.price)
  const [makeRecords, setMakeRecords] = useState([])


  useEffect(() => {
    const fetchMake = async () => {
        try {
            const res = await axiosInstance.get('/crud/make');
            if (res){
              setMakeRecords(res.data.data.data);
            }
        } catch (error) {
            console.error('Error fetching Make Records:', error);
        }
        };

      fetchMake();
}, []); 


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      let payload = {
        "name": name,
        "model":model,
        "color":color,
        "purchase_rate": purchaseRate,
        "price": price,
        "make": make
      }
      const response = axiosInstance.patch(`/crud/vechile?id=${data.id}`, payload, {headers: {'Content-Type': 'application/json'}})
      if (response){
        console.log('Response:', response.data);
        navigate('/vehicle', {state: {message: 'Vehicle Updated!'}})
      }
    }
    catch (error){
      console.log(error)
    }
  }


  const displayMakeRecords = makeRecords.map((item) => (
    <option value={item.id} key={item.id}>{item.name}</option>
  )
)


  return (
    <div className='form'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label for="name">Vechile Name</label>
          <input type="text" id="name" name="name" placeholder="Enter Name"
            value={name}
            onChange={e=> setName(e.target.value)}
          />

          <label for="make">Make</label>
          <select id="make" name="make" onChange={e => setMake(e.target.value)}>
            <option value={make}> {data.make['name']}</option>
            {makeRecords ? displayMakeRecords : <option value='0'>No Records</option>
          }
          </select>

          <label for="model">Model</label>
          <input type='number' id="model" name="model" placeholder="e.g. 2011"
            value={model}
            onChange={e=> setModel(e.target.value)}
          />

          <label for="color">Color</label>
          <select id="color" name="color" value={color} onChange={e => setColor(e.target.value)} >
            <option value="yellow" selected="selected">Yellow</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="gray">Gray</option>
            <option value="brown">Brown</option>
            <option value="cyan">Cyan</option>
          </select>

          <label for="purchaseRate">Purchase Rate</label>
          <input type='number' id="purchaseRate" name="purchaseRate" placeholder="e.g. 1000000"
            value={purchaseRate}
            onChange={e=> setPurchaseRate(e.target.value)}
          />

          <label for="price">Price</label>
          <input type='number' id="price" name="price" placeholder="e.g. 1000000"
            value={price}
            onChange={e=> setPrice(e.target.value)}
          />

          <input type="submit" value="Update"/>
        </form>
      </div>
    </div>
  )
}

export default UpdateVehicle