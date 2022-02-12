import React from 'react'
import Login from "./container/Login"
import Register from "./container/Register"
import Home from './container/Home'

//import { BrowserRouter as  Route , Routes } from 'react-router-dom'
import { BrowserRouter as Route , Routes } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/*' element={<Home />} />
    </Routes>
    )
};

export default App;