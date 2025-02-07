export const likePost = async (postId, token) => {
    try {
      const response = await fetch(`/api/posts/like/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token, // Pass token from localStorage or state
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Error liking post:", error);
      return { error: "Something went wrong" };
    }
  };

  export const deletePost = ()=>{
    
  }