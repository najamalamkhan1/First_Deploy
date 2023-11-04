import React,{useState} from 'react'

const Login = () => {
    const [email,setEmail] =useState('')
    const[password,setPassword] = useState('')
    const user= {
        email,
        password
    }
    const handleLogin = ()=>{
        localStorage.setItem('user',JSON.stringify(user))
    }
  return (
    <div>
      <h1>login</h1>
      <input type="email" placeholder='enter email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <input type="password" placeholder='enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
    <button onClick={handleLogin}>login</button>
    </div>



  )
}

export default Login
