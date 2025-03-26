const Sidebar = () => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <div className="flex items-center mb-8">
          <img
            src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
            alt="menu"
            className="h-8 mr-2"
          />
          <h1 className="text-2xl font-bold text-blue-500">ClipXpert</h1>
        </div>
  
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-500 mb-4">Navigate</h2>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Trending</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Subscriptions</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Library</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">History</a>
            </li>
          </ul>
        </div>
  
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-500 mb-4">Categories</h2>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Technology</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Music</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Sports</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Lifestyle</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Entertainment</a>
            </li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-lg font-semibold text-blue-500 mb-4">Suggested Channels</h2>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">ClipXpert Tutorials</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Tech Insights</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">Design Masters</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800">DevLearn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  