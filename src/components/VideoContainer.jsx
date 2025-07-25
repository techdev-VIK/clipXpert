import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos()
    }, [])


    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);

        const response = await data.json();

        setVideos(response.items);
    }


    return (
       <div className="flex flex-wrap">
        {/* {videos[0] && <HOCVideoCard  items={videos[0]}/>} */}
          {videos.length > 0 && videos.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard items={video} />
            </Link>
          ))}
       </div>
    )
}


export default VideoContainer;