import { createContext, useContext, useReducer } from "react";
import { postReducer } from "../reducer/postReducer";
import axios from "axios";

const PostContext = createContext()

export const PostProvider = ({children})=>{

    const [state,dispatch] = useReducer(postReducer,{posts : []})
    const fetchPosts = async()=>{
        try{
            const {data} = await axios.get("/api/posts/")
            console.log({data}, "Here")
            dispatch({type : "SET_POST", payload : data.posts})
        }catch(err){
            console.log(err)
        }

    }
    const postCreator = async(content)=>{
        console.log("THIS", content)
        try{
            const { data } = await axios.post(
                "/api/posts/",
                { postData: { content } },
                { headers: { authorization: localStorage.getItem("token") } }
              );
              dispatch({ type: "SET_POST", payload: data.posts });
        }catch(err){
            console.log("ERROR",err.response ? err.response.data : err)
        }
    }
    return <PostContext.Provider value={{posts:state.posts, postCreator,fetchPosts}}>{children}</PostContext.Provider>
}

export const usePostCreator = ()=>useContext(PostContext)