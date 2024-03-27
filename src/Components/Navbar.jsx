import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../Context/authContext'

function Navbar() {
  const {currUser}=useContext(AuthContext)
  return (

    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="{currUser.photoURL}" alt="" />
        <span>{currUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar