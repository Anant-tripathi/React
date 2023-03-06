import videoDB from './data/data'
import "./App.css"


import { useState } from 'react';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';

function App() {
  console.log("render app");

  const [videos, setVideos] = useState(videoDB);

  function addVideos(video) {
    setVideos([
      ...videos,
      {...video, id: videos.length+1}
    ]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos} />
      <VideoList videos={videos} />
    </div>
  )
}

export default App;