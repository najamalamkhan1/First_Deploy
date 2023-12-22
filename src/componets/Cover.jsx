import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import Signup from './FirstComp/Signup'
import { CartContext } from '../CreateContext'
const Cover = () => {
  const {value}= useContext(CartContext)
    const [products,setProducts] =useState([])













    
    // const callApi =async ()=>{
    //     const {data} = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    //     console.log(data)
    //     setProducts(data)
    // }
    // useEffect(()=>{
    //     callApi()
    // },[])
  return (
  <div>
{/* <Signup /> */}

  </div>
  )
}

export default Cover
