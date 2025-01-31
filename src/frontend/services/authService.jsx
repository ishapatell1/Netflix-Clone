import axios from "axios";


const API_URL = "/api/auth";

export const loginUser = async (username, password)=>{
    try{
        const response = await axios.post(`${API_URL}/login`, {username, password})
        return response.data;
    }catch(error){
        console.error(error.response.data)
    }
}