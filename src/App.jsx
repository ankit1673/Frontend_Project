import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Login from './pages/Login';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
       
        <Route path="/" element={<Login />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
