import viteLogo from '/vite.svg'
import './App.css'
import { LoginPage } from './frontend/pages/Login'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from './frontend/components/PrivateRoute'
import { Home } from './frontend/pages/Home'

function App() {

  return (
    <>
      <div className='bg-red-100 mb-0.5'>
        <Routes>
          <Route index element = {  <Home/>}/>
          <Route path = "/login" element = {<LoginPage/>}/>
          <Route path = "/" element = {<PrivateRoute><Home/></PrivateRoute>}/>ß
        </Routes>
      
       </div>
    </>
  )
}

export default App
