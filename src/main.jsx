import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './server.js'// Call make ServermakeServer()
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './frontend/context/AuthContext.jsx'
import { PostProvider } from './frontend/context/postContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PostProvider>
          <App />
        </PostProvider>
     </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
makeServer()