import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utilites/appSlice"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { YOUTUBR_SEARCH_API } from "../utilites/Constant"
import { cacheResults } from "../utilites/SearchSlice"

const Head = () => {

    const[searchQuery,setSearchQuery] = useState("")
    const[suggestSearch, setSuggestSearch] = useState([])
    const[showSuggest,setShowSuggest] = useState(false)

    const searchCache = useSelector(store => store.search)
    const dispatch = useDispatch()

    useEffect(() => {

    const timer = setTimeout(() =>{
    if(searchCache[searchQuery]) {
        setSuggestSearch(searchCache[searchQuery])
    }else{
        getSearchSuggestion()
    }
}
    ,200)
        
    console.log(searchQuery)
    return () => {
        clearTimeout(timer)
    }
    },[searchQuery])

    const getSearchSuggestion = async () => {
        const data  = await fetch(YOUTUBR_SEARCH_API+searchQuery)
        const json = await data.json() 
        console.log(json[1]) 
        setSuggestSearch(json[1])
        dispatch(cacheResults({
           [searchQuery] : json[1]
        }
        ))
    }

    
    const toggleHandler = () => {
        dispatch(toggleMenu())
    } 


    return (
        <div className="grid grid-flow-col p-4 shadow-lg m-2">
            <div className="flex col-span-1 gap-2">
                <img  onClick={() => toggleHandler()} className="h-7 cursor-pointer " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII=" alt="hamMenu"/>
                <img className="h-8 cursor-pointer" src="data:image/png;base64,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" alt="Youtubelogo"/>

            </div>
            
            <div className="col-span-10 ">
            <div>
                <input className="px-5 w-1/2 border border-gray-500 rounded-l-full" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggest(true)}
                    onBlur={() => setShowSuggest(false)}
                />
                <button className="border border-gray-500 rounded-r-full bg-gray-200 ">Search</button>   
            </div>
          {showSuggest &&  <div className="absolute bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border-gray-200">
                    <ul>
                        {suggestSearch.map((s) => <li className="py-2 px-2 shadow-sm hover:bg-gray-100 cursor-pointer">{s}</li>)}
                    </ul>
             </div>}
             </div>
                
            <div className="col-span-1">
                <img className="h-8"src="data:image/png;base64,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" alt="user"/>
            </div>
        </div>
    )
}

export default Head