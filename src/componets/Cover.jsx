import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Signup from './FirstComp/Signup'
const Cover = () => {
    const [products,setProducts] =useState([])
    const callApi =async ()=>{
        const {data} = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        console.log(data)
        setProducts(data)
    }
    useEffect(()=>{
        callApi()
    },[])
  return (
  <div>
{/* <Signup /> */}

  </div>
  )
}

export default Cover
