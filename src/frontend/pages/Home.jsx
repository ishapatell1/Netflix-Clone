import React, { useState } from 'react'
import { Header } from '../components/Header'
import { posts } from '../../backend/db/posts'

export const Home = () => {
  const [sort, setSort] = useState("Date")
  const formatDate = (date) => new Date(date).toLocaleString()  
  const sortedPosts = [...posts].sort((a,b)=>{
    if(sort==="Date"){
      return new Date(b.createdAt)- new Date(a.createdAt)
    }
      return b.likes.likeCount - a.likes.likeCount
  })
  console.log("Sort", sortedPosts)
  const handleSort = (val)=>{
    setSort(val)
  }
  console.log(sort)
  return (
    <div>
      <Header/>
      <div className='flex p-5 gap-2'> 
        <p>Sort By</p>
        <select onChange={(e)=>handleSort(e.target.value)}>
          <option value= "Date">Date</option>
          <option value= "Trending">Trending</option>
        </select>
      </div>
      <ul> 
      {sortedPosts.map((post)=>(
        <li key = {post._id} className='m-1 p-2'>
          <span> By {post.username}</span>
          <p className='m-11'>{post.content}</p>
          <div>
            <span>{post.likes.likeCount}</span>
            <span>{post.likes.likedBy}</span>
            <span>{post.likes.dislikedBy}</span>
          </div>
          <div className='flex text-gray-500'>
          <span className='flex'><p>Created : </p>{formatDate(post.createdAt)}</span>
          <span className='flex'><p> Updated at : </p>{formatDate(post.updatedAt)}</span>
          
          </div>
          
        </li>
         
      ))}
      </ul>
      </div>
  )
}
