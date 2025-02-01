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
      navigate("/home");
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div  className="relative h-screen bg-cover bg-center bg-no-repeat">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
      style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg')", filter: "blur(1px)" }}
    />

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">

      <div className=" py-36 px-8 rounded-md w-full max-w-md mx-auto box-border " style={{backgroundColor : "rgba(0, 0, 0, 0.7)"}}>
      <header className="text-3xl font-bold mb-8">
        <h1>Netflix Clone</h1>
      </header>
        <form onSubmit = {handleLogin} className="flex flex-col items-center">
          <label htmlFor="username" className="block text-sm font-medium mb-2"></label>
          <input 
            type="text" 
            id="username" 
            className="w-full py-4 p-1.5 border-1 border-gray-400 rounded-md mb-4 text-white placeholder-gray-300" 
            placeholder="User Name" value={userName} onChange={(e)=>setUserName(e.target.value)}
          />
          <label htmlFor="password" className="block text-sm font-medium mb-4"> </label>
          <input 
            type="password" 
            id="password" 
            className="w-full py-4 border-1 m-1 p-1.5 rounded-md mb-6 text-white placeholder-gray-300" 
            placeholder="Password" autoComplete="current-password"  value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          {/* <Link to = ""> Forget Password? Eat Almonds!</Link> */}
          <button onClick={()=>navigate("/signup")}>No Account? Sign up Here!</button>
          <button 
            type="submit" 
            className="bg-red-600 text-white px-11 py-3 rounded-lg font-semibold cursor-pointer">
            Sign In
          </button>
        </form>
      </div>
    </div>
  </div>
    </>
  )
}

