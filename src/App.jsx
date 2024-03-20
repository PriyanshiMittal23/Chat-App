import React from 'react'
import {auth, db, storage} from './firebase'
import Register from './Pages/Register'
import Login from './Pages/Login'
import "./style.scss"
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      {/* {JSON.stringify(storage)}; */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Home />
    </div>   
  )
}

export default App