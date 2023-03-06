import Video from './components/Video'
import videoDB from './data/data'
import "./App.css"
import PlayButton from './components/PlayButton';
import Counter from "./components/Counter";

import { useState } from 'react';

function App() {
  console.log("render app");

  const [videos, setVideos] = useState(videoDB);

  return (
    <div className="App" onClick={() => console.log("App")}>
      {
        videos.map(video => <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("playing..", video.title)}
            onPause={() => console.log("pausing..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>)
      }
    </div>
  )
}

export default App;