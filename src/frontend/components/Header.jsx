import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const {authDispatch} = useAuth()
    const navigate = useNavigate()
    const handleClick = ()=>{
        authDispatch({type : "LOGOUT"})
        navigate("/login")
    }
  return (
    <header className='p-9'>
        <button className = "px-3 py-2.5 border-2 rounded-lg cursor-pointer"onClick={handleClick}>Logout</button>
    </header>
  )
}
