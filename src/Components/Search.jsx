import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs,getDoc,setDoc,doc, updateDoc,serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../Context/authContext'

function Search() {
  const [userName, setuserName] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currUser}=useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));
    try{
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
    });
    (user!=null)?setErr(false):setErr(true)
  }
  catch(err){
    // console.log(err)
    setErr(true)
  }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  }

  const handleSelect= async ()=>{
    const combinedId=currUser.uid>user.uid?currUser.id+user.uid:user.id+currUser.uid;
    try {
      const chatBtwPerson = await getDoc(doc(db, "chats", combinedId));
      if (!chatBtwPerson.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
    }
     //create user chats
     await updateDoc(doc(db, "userChats", currUser.uid), {
      [combinedId + ".userInfo"]: {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      [combinedId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", user.uid), {
      [combinedId + ".userInfo"]: {
        uid: currUser.uid,
        displayName: currUser.displayName,
        photoURL: currUser.photoURL,
      },
      [combinedId + ".date"]: serverTimestamp(),
    });
  }catch(err){}
  setUser(null);
  setuserName("")
  };

  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a User' onKeyDown={handleKey} onChange={e =>{setErr(false); setUser(null); return setuserName(e.target.value)}}
        value= {userName}/>
      </div>
      {!user &&(err && <span>User Not found</span>)}
      {user && <div className='userChat' onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search