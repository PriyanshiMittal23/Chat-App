import React, { useContext } from 'react'
import {auth, db, storage} from './firebase'
import Register from './Pages/Register'
import Login from './Pages/Login'
import "./style.scss"
import Home from './Pages/Home'
import { Routes,Route, Navigate } from 'react-router-dom' 
import { AuthContext } from './Context/authContext'

const App = () => {
  const {currUser}=useContext(AuthContext)
  const ProtectedRoute=({children})=>{
    if(!currUser){
      return <Navigate to='/login'/>
    }
    return children
  }
  console.log(currUser)
  return (
    <div>
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
      <Home/>
      </ProtectedRoute>
      }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </div>
  )
}

export default App