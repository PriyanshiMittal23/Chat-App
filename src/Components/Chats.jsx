import { onSnapshot,doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/authContext'
import { db } from '../firebase'

function chats() {
  const [chats,setChats]=useState([])

  const {currUser}=useContext(AuthContext)

  useEffect(()=>{
    const getChats=()=>{
    const unsub=onSnapshot(doc(db,'userChats',currUser.uid),(doc)=>{
      setChats(doc.data());
    });
    return ()=>{
      unsub();
    }
  };
  currUser.uid&&getChats()
},[currUser.uid]);
// console.log(Object.entries(chats))

  return (
    <div className='chat'>
      {Object.entries(chats)?.map((chat)=>{
        <div className='userChat' key={chat[0]}>
        <img src={chat[1].userInfo.photoURL} alt="" />
        <div className='userChatInfo'>
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      })
    }
     
    </div>
  )
}

export default chats