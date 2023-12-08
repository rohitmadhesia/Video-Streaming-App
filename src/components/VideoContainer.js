import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utilites/Constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addMoviesData } from "../utilites/appSlice"

const VideoContainer = () => {

    const[video,setVideo] = useState([])

    const dispatch = useDispatch()
  
   useEffect(() => {
    fetchData()
   },[])

   const fetchData = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    console.log(json.items)
    setVideo(json.items)
     dispatch(addMoviesData(json.items))
   }

    return (
        <div className="flex flex-wrap">
        {video.map((url) =>
        <Link key={url.id} to={"/watch?v="+ url.id}><VideoCard  info={url}/></Link>
       )}
        
        </div>
    )
}
export default VideoContainer