import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './frontend/pages/Login'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './frontend/components/PrivateRoute'
import { Home } from './frontend/pages/Home'
import { SignupPage } from './frontend/pages/SignupPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
      <div className='bg-red-100 mb-0.5'>
      <ToastContainer/>
        <Routes>
          <Route index element = {  <LoginPage/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/signup" element = {<SignupPage/>}/>
          <Route path = "/home" element = {<PrivateRoute><Home/></PrivateRoute>}/>
         
        </Routes>
      
       </div>
    </>
  )
}

export default App
