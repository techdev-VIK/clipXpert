import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";


const VideoContainer = () => {

    useEffect(() => {
        getVideos()
    })


    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);

        const response = await data.json();

        console.log(response);
        return response;

    }

    return (
       <div>

       </div>
    )
}


export default VideoContainer;