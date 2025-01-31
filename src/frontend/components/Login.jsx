import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { loginUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const {authDispatch} = useAuth()
  const navigate = useNavigate()
  const handleLogin = async (e)=>{
    e.preventDefault(); 
    try{
      
      const response = await loginUser(userName,password); 
      console.log("REs", response)
      const {foundUser, encodedToken} = response;
      authDispatch({type : "LOGIN", payload: {user : foundUser, token : encodedToken}}); 
      localStorage.setItem("token", encodedToken)
      localStorage.setItem("user", JSON.stringify(foundUser))
      navigate("/");
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <form onSubmit = {handleLogin} className=' flex flex-col items-center p-6 rounded-lg shadow-md text-black'>
    <label htmlFor='username' className= "block text-sm font-medium">UserName
      <input  className='m-9 p-2 bg-gray-100 rounded-b-lg opacity-500' type='text' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
    </label>
    <label>Password
      <input className = "m-9 p-2 bg-gray-100 rounded-b-lg"type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    </label>
    <button className='bg-gray-200 rounded-b-lg m-2.5 px-4 py-2 text-xl align-middle cursor-pointer' 
            type='submit'
    >Login</button>
    </form>
    </>
  )
}
