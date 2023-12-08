import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../utilites/appSlice"
import { useSearchParams } from "react-router-dom"
import { SUBSCRIPTION_API } from "../utilites/Constant"

const WatchPage = () => {

    const[searchparams] = useSearchParams()

    const dispatch = useDispatch()
    const movies = useSelector((store) => store.app.moviesData)
    console.log(movies)
    
    const{snippet} = movies[0]
    const {title} = snippet

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
        <div className="px-5">
        <iframe className="rounded-lg" width="900" height="480" src={"https://www.youtube.com/embed/"+ searchparams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h1>{title}</h1>
        </div>
    )
}

export default WatchPage