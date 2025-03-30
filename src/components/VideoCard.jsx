


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


export default VideoCard;