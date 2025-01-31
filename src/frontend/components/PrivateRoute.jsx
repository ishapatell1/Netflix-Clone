import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const PrivateRoute = ({children}) => {
  const {authState} = useAuth()
  return authState.isAuthenticated ? children : <Navigate to = "/login"/>
}
