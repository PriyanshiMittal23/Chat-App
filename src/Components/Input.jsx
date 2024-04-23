import React, { useContext, useState } from 'react'
import Img from '../images/img.png'
import Attach from '../images/attach.png'
// import Send from '../images/plane.jpeg'
import { AuthContext } from '../Context/authContext';
import { ChatContext } from '../Context/ChatContext';
import { Timestamp, arrayUnion, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { ref,} from 'firebase/storage';
import { storage } from '../firebase';
import { doc } from 'firebase/firestore';
import { db } from '../firebase';

function Input() {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const {currentuser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  const handleSend = async()=>{
    if(img){

      const storageRef = ref(storage, uuid());
      uploadBytes(storageRef, img)
        .then((snapshot) => {
          return getDownloadURL(snapshot.ref);
        })
        .then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", data.chatId)),{
            messages: arrayUnion({
              id:uuid(),
              text,
              senderId: currentuser.uid,
              date:Timestamp.now(),
              img: downloadURL
            })
          }
        });
        setErr(true);
    }
    else{
      await updateDoc(doc(db, "chats", data.chatId)),{
        messages: arrayUnion({
          id:uuid(),
          text,
          senderId: currentuser.uid,
          date:Timestamp.now()
        })
      }
    }
  }

  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' onChange={(e)=>setText(e.target.value)} />
      <div className='send'>
        <img src={Img} alt="" />
        <input type="file" style={{display:'none'}} id="file" onChange={(e)=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        
        <button onClick={handleSend}>Send</button>

      </div>
    </div>
  )
}

export default Input