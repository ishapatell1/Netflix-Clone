import axios from "axios";
import { toastAdder } from "./toastAdder";


const API_URL = "/api/auth";

export const loginUser = async (username,password)=>{
    try{
        const response = await axios.post(`${API_URL}/login`, {username, password})
        toastAdder("success", "Login Success")
        return response.data;
       
    }catch(error){
        console.error(error.response.data)
    }
}

export const SignupUser = async (username, password) =>{
    try{
        const res = await axios.post(`${API_URL}/signup`, {username, password})
        console.log(res.data)
        toastAdder("success", "Signup Success")
        return res.data
    }catch(ere){
        toastAdder("error", "ERROR IN SIGNUP")
        console.log(ere)
    }
}