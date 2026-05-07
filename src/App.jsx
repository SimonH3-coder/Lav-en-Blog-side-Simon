import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import { BlogLiPage } from './pages/BlogLiPage'


import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<BlogLiPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
