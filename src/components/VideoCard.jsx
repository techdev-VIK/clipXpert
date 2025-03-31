


const VideoCard = ({items}) => {


        const {snippet, statistics} = items;

        const {channelTitle, title, thumbnails} = snippet || {};


        return (
            <div className="p-2 m-2 w-72 shadow-xl h-80">
                <img alt="thumbnail" src={thumbnails.medium.url} />
                <ul>
                    <li className="font-bold py-2">{title}</li>
                    <li>{channelTitle}</li>
                    <li><small>{statistics.viewCount} Views · {statistics.likeCount} Likes</small></li>
                </ul>
            </div>
        )
}

export const HOCVideoCard = ({items}) => {
    return(
        <div className="p-1 m-1 border border-red-900">
            <VideoCard items={items}/>
        </div>
    )
}


// HOC - Higher order component is a function in which a component is passed and some modifications are made and then the component is returned. Useful when making some changes to existing component like on youtube we have ads along with videos. The text inside ad varies a little bit so in this case HOC can be useful.

export default VideoCard;