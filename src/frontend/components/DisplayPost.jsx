import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostCreator } from '../context/postContext';
import { likePost } from '../services/postService';

export const DisplayPost = () => {
  const [sort, setSort] = useState("Date");
  const navigate = useNavigate();
  const { posts, fetchPosts } = usePostCreator();

  // Fetch posts only when the component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  const formatDate = (date) => new Date(date).toLocaleString();

  // Sort posts based on Date or Like Count
  const sortedPosts = [...posts].sort((a, b) => {
    return sort === "Date"
      ? new Date(b.createdAt) - new Date(a.createdAt)
      : b.likes.likeCount - a.likes.likeCount;
  });

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  const handleLike = async (postId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("User is not authenticated.");
        return;
      }

      const data = await likePost(postId, token);
      if (data.posts) {
        fetchPosts();
      } else {
        console.error("Error liking post:", data.errors);
      }
    } catch (error) {
      console.error("Error in handleLike:", error);
    }

    const handleDelete = async (postId)=>{

    }
  };

  return (
    <div className="m-9 p-4">
      <h1 className="text-2xl font-bold">List of All Posts</h1>

      {/* Create Post Button */}
      <button
        onClick={() => navigate("/posts")}
        className="m-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer"
      >
        Create a Post
      </button>

      {/* Sorting Dropdown */}
      <div className="flex p-5 gap-2">
        <p className="font-semibold">Sort By:</p>
        <select onChange={handleSort} className="border p-2 rounded-md">
          <option value="Date">Date</option>
          <option value="Trending">Trending</option>
        </select>
      </div>

      {/* Posts List */}
      <ul>
        {sortedPosts.map((post) => (
          <li key={post._id} className="m-1 p-4 border border-gray-400 rounded-lg">
            {/* Post Header */}
            <div className='text-gray-500 '>
            <span className="font-semibold">By {post.username || "Unknown"}</span><span>
              <button className='cursor-pointer' onClick={()=>handleDelete(post._id)}> Delete </button></span>
            </div>
            {/* Post Content */}
            <p className="mt-3 mb-2">{post.content}</p>

            {/* Like/Dislike Buttons */}
            <div className="flex items-center gap-4 mt-2">
              <button className="bg-gray-200 text-lg cursor-pointer py-2 px-4 rounded-full">
                Save❤️ 
              </button>
              <button
                onClick={() => handleLike(post._id)}
                className="bg-red-50 text-lg cursor-pointer py-2 px-4 rounded-full"
              >
                👍 {post.likes.likedBy?.length || 0}
              </button>
              <button className="bg-red-50 text-lg cursor-pointer py-2 px-4 rounded-full">
                👎 {post.likes.dislikedBy?.length || 0}
              </button>
             
            </div>

            {/* Post Metadata */}
            <div className="flex text-gray-500 text-sm mt-2">
              <span className="mr-4">
                <strong>Created:</strong> {formatDate(post.createdAt)}
              </span>
              <span>
                <strong>Updated:</strong> {formatDate(post.updatedAt)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};