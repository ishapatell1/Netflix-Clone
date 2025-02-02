import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toastAdder } from '../services/toastAdder'
import axios from 'axios'
import { usePostCreator } from '../context/postContext'

export const CreatePost = () => {
    const [createPost, setCreatePost] = useState("")
    const{postCreator} = usePostCreator()
    const navigate = useNavigate()
   const handleClick = (e)=>{
    e.preventDefault()
    if(createPost.trim()){
      console.log(createPost, "We are here")
      postCreator(createPost); 
      setCreatePost("")
      navigate("/home")
    }
   }
  return (
    <div>
        <form onSubmit={(e)=>handleClick(e)}> 
        <textarea placeholder='Which Movie made you cry?' value = {createPost} onChange={(e)=>setCreatePost(e.target.value)}/>
        <button type='submit'>Add</button>
        </form>
    </div>
  )
}
