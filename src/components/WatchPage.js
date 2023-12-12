import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../utilites/appSlice"
import { useSearchParams } from "react-router-dom"
import { SUBSCRIPTION_API } from "../utilites/Constant"
import LiveChat from "./LiveChat"

const WatchPage = () => {

    const[searchparams] = useSearchParams()

    const dispatch = useDispatch()
    const movies = useSelector((store) => store.app.moviesData)
    console.log(movies)
    
    

    useEffect(() => {
       dispatch(closeMenu())
    },[])



    //   useEffect(() => {
    //     fetchSubscription()
    //   },[])
      
    //   const fetchSubscription = async () => {
    //     const data = await fetch(SUBSCRIPTION_API)
    //     const json = await data.json()
    //     console.log(json)
    //   }

    return (
        <div className="px-5 flex w-full">
        <div>
        <iframe className="rounded-lg" width="900" height="480" src={"https://www.youtube.com/embed/"+ searchparams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="w-full">
           <LiveChat/> 
        </div>

        </div>
    )
}

export default WatchPage