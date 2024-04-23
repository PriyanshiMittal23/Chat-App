import React, { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import { ChatContext } from '../Context/ChatContext';

function Message({message}) {

  const {currentuser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  return (
    <div className='message owner'>
      {/* <div className="messageInfo">
        <img src="https://i.pinimg.com/474x/96/64/97/96649787685c2593da073293720974fb.jpg" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://www.svgrepo.com/show/382368/avatar-emoji-emoticon-emotion-expression-profile.svg" alt="" />
      </div> */}
    </div>
  )
}

export default Message