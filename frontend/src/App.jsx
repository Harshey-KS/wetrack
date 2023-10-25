import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
