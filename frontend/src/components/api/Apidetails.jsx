
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'

const Apidetails = () => {

const[data,setData]=useState({})
const params=useParams();


const products=async()=>{
Loader(true);
const productsData= await axios.get(`https://fakestoreapi.com/products/${params.id}`)
setData(productsData.data)
Loader(false);

} 


useEffect(()=>{

products();
})

  return (

    <div>

     <div className="container">
        <div className="row">
            <div className="col-6">
                <img src={data.image} alt="" height={"400px"}width={"400px"}/>
            </div>
            <div className="col-6">
               <h1>{data.title}</h1>
               <h3>{data.description}</h3>
               <h3>{data.price}</h3>
            </div>
        </div>
     </div>

    </div>
  )
  
}

export default Apidetails