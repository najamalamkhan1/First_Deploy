import React,{useState,useEffect} from 'react'

const SecondComp = () => {
  const [count,setCount] = useState(0)
const handleClick = ()=>{
  setCount(count+1)
}
  return (
    <div>
  <button onClick={handleClick}>count</button>   
  {count}
    </div>
  )
}

export default SecondComp
