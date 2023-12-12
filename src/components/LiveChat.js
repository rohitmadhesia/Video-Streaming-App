import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addChatMessage } from "../utilites/chatSlice"
import { generateRandomName, generateRandomString } from "../utilites/helper"

const LiveChat = () => {

    const[liveMessage,setLiveMessage] = useState()

    const dispatch = useDispatch()
    const chatMessage = useSelector(store => store.chat.moveChat)
    
  useEffect(() => {
    const interval = setInterval(() => {
       console.log("api polling")
       dispatch(addChatMessage({
        name: generateRandomName(),
        message:generateRandomString(20),
       }))
    },1500)

    return () => clearInterval(interval)
  },[])

    return(
        <>
        <div className=" h-[450px] border border-black ml-2 p-2 w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((e,i) => (  
            <ChatMessage key={i} name={e.name} message={e.message}/>)
        )} 
        
        </div>
        <form className="w-full border border-black p-2 ml-2 rounded-lg" onSubmit={(e) => {
           e.preventDefault() 
             
           dispatch(addChatMessage({
            name:"Rohit",
            message:liveMessage
           }))
         } }>
            <input type="text" className="px-2 w-80" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
            <button className="px-2 mx-2 bg-green-100">send</button>
        </form>
        </>
    )
}
export default LiveChat