import Video from './components/Video'
import Videos from './data/data'
import "./App.css"

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {
        Videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          >
        </Video>)
      }
    </div>
  )
}

export default App;