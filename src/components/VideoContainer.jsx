const VideoContainer = () => {
    const videos = [
      {
        id: 1,
        title: "Understanding React Hooks",
        thumbnail: "https://via.placeholder.com/320x180.png?text=React+Hooks",
        channel: "ClipXpert Tutorials",
        views: "2M views",
        uploaded: "3 days ago",
      },
      {
        id: 2,
        title: "Advanced JavaScript Concepts",
        thumbnail: "https://via.placeholder.com/320x180.png?text=JavaScript+Concepts",
        channel: "Tech Insights",
        views: "1.5M views",
        uploaded: "5 days ago",
      },
      {
        id: 3,
        title: "Mastering CSS Grid",
        thumbnail: "https://via.placeholder.com/320x180.png?text=CSS+Grid",
        channel: "Design Masters",
        views: "800K views",
        uploaded: "2 weeks ago",
      },
      {
        id: 4,
        title: "Introduction to Node.js",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Node.js+Intro",
        channel: "DevLearn",
        views: "1.2M views",
        uploaded: "1 month ago",
      },
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <p className="text-sm text-gray-500">{video.views} | {video.uploaded}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default VideoContainer;
  