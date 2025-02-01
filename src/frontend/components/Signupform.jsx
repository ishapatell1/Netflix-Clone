import React, { useState } from 'react'
import axios from 'axios'
import { toastAdder } from '../services/toastAdder'
import { SignupUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
export const Signupform = () => {
    const [input, setInput] = useState("") 
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const {authDispatch} = useAuth()
    const handleSubmit =async (e)=>{
        e.preventDefault()
        if(confirmPassword === password){
            try{
                const response = await SignupUser(input,password, email)
                console.log(response, "Here")
                if(response){
                authDispatch({type: "SIGNUP", payload : {user : response.createdUser, token : response.encodedToken}})
                localStorage.setItem("token", response.encodedToken);
                localStorage.setItem("user", JSON.stringify(response.createdUser));
                navigate("/home")
                }
              
            }catch(err){
                console.log(err)
            }

        }else{
            toastAdder("error", "Passwords do not match")
        }
    }
  return (
   <>
 <div className="flex justify-center items-center min-h-screen">
            <form 
                className="bg-white shadow-md rounded-lg p-6 w-96" 
                onSubmit={handleSubmit}
            >
                <h2 className="text-xl font-bold mb-4 text-center">Sign Up</h2>

                <label className="block mb-1 font-semibold">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    className="w-full border rounded-md p-2 mb-3"
                    placeholder="Enter your full name"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    required
                />

                <label className="block mb-1 font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    className="w-full border rounded-md p-2 mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />

                <label className="block mb-1 font-semibold">Password</label>
                <input
                    type="password"
                    name="password"
                    className="w-full border rounded-md p-2 mb-3"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />

                <label className="block mb-1 font-semibold">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    className="w-full border rounded-md p-2 mb-4"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600"
                >
                    Sign Up
                </button>
            </form>
        </div>
   </>
  )
}
