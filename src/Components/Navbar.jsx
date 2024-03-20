import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img src="https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_640.png" alt="" />
        <span>Muskan</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar