import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a User' />
      </div>
      <div className='userChat'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyn8d0Y-WkYKyHJwzq6ZLFUAbdLfhjlLNm2HVXU2Pj_RgF8tJ8kSIWA7zhHBi6Hu-DS8&usqp=CAU" alt="" />
        <div className='userChatInfo'>
          <span>Vaibhav</span>
        </div>
      </div>
    </div>
  )
}

export default Search