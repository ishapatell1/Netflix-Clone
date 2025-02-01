import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const {authDispatch} = useAuth()
  const navigate = useNavigate()
  const handleClick = ()=>{
    authDispatch({type : "LOGOUT"})
    navigate("/login")
  }
  return (
    <div>
      <h1>Home- Unlimited movies, TV shows and more</h1>
      <h3>Now Available Netflix as a social media too </h3>
      <h1> NetFlix</h1>
      <button onClick={handleClick}>Logout</button>
      </div>
  )
}
