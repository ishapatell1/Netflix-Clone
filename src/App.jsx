import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './frontend/pages/Login'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './frontend/components/PrivateRoute'
import { Home } from './frontend/pages/Home'
import { SignupPage } from './frontend/pages/SignupPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreatePost } from './frontend/components/CreatePost'
function App() {

  return (
    <>
      <div className='bg-red-100 mb-0.5'>
      <ToastContainer/>
        <Routes>
          <Route index  path = "/home" element = {  <Home/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/signup" element = {<SignupPage/>}/>
          <Route path = "/posts" element = {<CreatePost/>}/>
          {/* <Route path = "" element = {<PrivateRoute><Home/></PrivateRoute>}/> */}
         
        </Routes>
      
       </div>
    </>
  )
}

export default App
