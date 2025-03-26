import React, { useState } from 'react';
import './App.css'; 


const videos = [
  { id: 1, title: 'Video 1', thumbnail: 'https://via.placeholder.com/150', description: 'Description 1' },
  { id: 2, title: 'Video 2', thumbnail: 'https://via.placeholder.com/150', description: 'Description 2' },
  { id: 3, title: 'Video 3', thumbnail: 'https://via.placeholder.com/150', description: 'Description 3' },
  { id: 4, title: 'Video 4', thumbnail: 'https://via.placeholder.com/150', description: 'Description 4' },
  { id: 5, title: 'Video 5', thumbnail: 'https://via.placeholder.com/150', description: 'Description 5' },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search submitted: ', searchTerm); 
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <header className="my-4">
        <h1>clipXpert</h1>
        <form onSubmit={handleSearchSubmit}>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                placeholder="Search for videos"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </form>
      </header>

      <div className="row">
        <div className="col-md-8">
          {selectedVideo ? (
            <div>
              <h3>{selectedVideo.title}</h3>
              <div>
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ`} 
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{selectedVideo.description}</p>
            </div>
          ) : (
            <p>Please select a video</p>
          )}
        </div>

        <div className="col-md-4">
          <h4>Trending Videos</h4>
          {videos.map((video) => (
            <div key={video.id} className="card mb-3" onClick={() => handleVideoClick(video)}>
              <img className="card-img-top" src={video.thumbnail} alt={video.title} />
              <div className="card-body">
                <h5 className="card-title">{video.title}</h5>
                <p className="card-text">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
