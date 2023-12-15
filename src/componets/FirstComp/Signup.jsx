import React,{useState} from 'react'
import axios from 'axios'
const Signup = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
console.log(name)
    const sumbitData = async()=>{
        try{
            const {data} =await axios.post('http://localhost:5000/api/createUser',{name,email,password})
        localStorage.setItem("token",JSON.stringify(data))
        window.location.reload()
        }catch(e){console.log(e)}
    }
  return (
    <div>
<input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
<input type="email" placeholder='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
<button onClick={sumbitData}>sumbit</button>
    </div>
  )
}

export default Signup
