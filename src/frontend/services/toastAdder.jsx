import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const toastAdder = (type, content, position= "top-center") => {
  return (
   toast[type](content, {
    position : position,
    autoClose: 1000, 
    pauseOnHover : true
   })
  )
}
