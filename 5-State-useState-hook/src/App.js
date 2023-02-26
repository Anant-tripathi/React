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
    <div className="App" onClick={()=>console.log("App")}>
      <div>
        <button onClick={()=>{
          setVideos([...videos,{
            id: videos.length+1,
            title: "DEMO JS tutorials",
            views: "400K",
            time: "2 years ago",
            channel: "coder dost",
            verified: false
        }]);
        }}>Add Video</button>
        </div>
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
            onPlay={() => console.log("playing..",video.title)}
            onPause={() => console.log("pausing..",video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>)
      }
      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log("play")} onPause={()=>console.log("pause")}>Play</PlayButton> */}
        {/* here the onClick is not a function but just a prop being passed and the functionality
      is being added in the playButton jsx file in the handleClick function */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert("playyy")}>Pause</PlayButton> */}
      </div>
      <Counter/>
    </div>
  )
}

export default App;