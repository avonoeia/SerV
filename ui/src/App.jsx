import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

/*Pages*/
import StartNewOrder from "./pages/StartNewOrder"
import Orders from "./pages/Orders"
import Menu from "./pages/Menu"
import Customers from "./pages/Customers"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Orders />}></Route>
          <Route path='/new-order' element={<StartNewOrder />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/customers' element={<Customers />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
