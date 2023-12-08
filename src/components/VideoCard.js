const VideoCard = ({info}) => {
    console.log(info)
    const{snippet,statistics } = info;
    
    const {channelTitle,title,thumbnails} = snippet
    return (
        <div className="shadow-lg p-2 m-1 w-72">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail"/>
            <ul>
                <li className="font-bold">{title}</li>
                <li className="text-gray-500">{channelTitle}</li>
                <li className="text-gray-500">{statistics.viewCount} Views</li>
            </ul> 
        </div>
    )
}

export default VideoCard