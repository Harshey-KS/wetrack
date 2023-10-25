import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from "axios"
import { AuthContextProvider } from './context/AuthContext.jsx'

axios.defaults.baseURL="http://localhost:5000/api/"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
  </React.StrictMode>
)
