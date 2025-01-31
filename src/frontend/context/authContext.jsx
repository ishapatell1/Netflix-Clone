import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer, initialState } from "../reducer/authReducer";

const AuthContext = createContext(); 

export const AuthProvider = ({children})=>{
    const [authState, authDispatch] = useReducer(authReducer,initialState)
    useEffect(()=>{
        const storedUser = localStorage.getItem("user"); 
        const storedToken = localStorage.getItem("token"); 
        if(storedToken & storedUser){
            authDispatch({type: "LOGIN", payload: {user: JSON.parse(storedUser), token:storedToken}})
        }
    },[])
    return(
        <AuthContext.Provider value={{authState, authDispatch}}>{children}</AuthContext.Provider>
    )

}

export const useAuth = ()=>{
    return useContext(AuthContext)
}