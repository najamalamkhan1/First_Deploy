import { useState,useEffect } from 'react'
import styles from './FirstComp.module.css'
import SecondComp from './SecondComp'
import axios from 'axios'
const FirstComp = ({name}) =>{
    const [products,setProducts] = useState([])

    //     useEffect(()=>{
//         console.log('i m without clicked')

//     },[])
// //  const [first,setFirst] = useState(0)  
// //  console.log(first) 

useEffect(()=>{
    const handleClick =async () =>{
        try{
            const {data} = await axios.get('https://dummyjson.com/products')
            console.log(data.products)
            setProducts(data.products)
        }catch(e){
            console.log(e)
        }
     }  
     handleClick()
},[])

    return(
      
       <div>
        {/* <button onClick={handleClick}>click</button> */}
        {
            products.map((product)=>{
                return(
                   <div>
                     <div key={product.id}>
                  {product.title}

                    </div>
                    <div>{product.descripiton}</div>
                    <div>{product.price}</div>
                    <div><img src={product.images[0]} alt="" /></div>
                    <div>{product.brand}</div>
                    <div>{product.stock}</div>
                   </div>
                    
                )
            })
        }
       </div>
    )
}


export default FirstComp