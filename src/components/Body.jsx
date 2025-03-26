const Body = () => {
    const videos = [
      {
        id: 1,
        title: "Understanding React Hooks",
        thumbnail: "https://via.placeholder.com/320x180.png?text=React+Hooks",
        channel: "ClipXpert Tutorials",
        views: "2M views",
      },
      {
        id: 2,
        title: "Advanced JavaScript Concepts",
        thumbnail: "https://via.placeholder.com/320x180.png?text=JavaScript+Concepts",
        channel: "Tech Insights",
        views: "1.5M views",
      },
      {
        id: 3,
        title: "Mastering CSS Grid",
        thumbnail: "https://via.placeholder.com/320x180.png?text=CSS+Grid",
        channel: "Design Masters",
        views: "800K views",
      },
      {
        id: 4,
        title: "Introduction to Node.js",
        thumbnail: "https://via.placeholder.com/320x180.png?text=Node.js+Intro",
        channel: "DevLearn",
        views: "1.2M views",
      },
    ];
  
    return (
      <div className="grid grid-cols-12 gap-4 m-4">
        {/* Left sidebar */}
        <div className="col-span-3 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-500 mb-4">Categories</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:text-blue-800">Technology</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:text-blue-800">Music</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:text-blue-800">Sports</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:text-blue-800">Lifestyle</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600 hover:text-blue-800">Entertainment</a></li>
          </ul>
        </div>
  
        {/* Main content (videos grid) */}
        <div className="col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.channel}</p>
                <p className="text-sm text-gray-500">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;
  