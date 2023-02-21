import Video from './components/Video'
import "./App.css"

function App() {

  let obj = {
    title: "Node JS tutorials",
    views: "100K",
    time: "2 months ago",
    channel: "coder dost"
  };

  return (
    <div className="App">
      <div>Videos</div>
      <Video
        title="React JS tutorial"
        views="10K"
        time="1 year ago"
        channel="coder dost">
      </Video>
      <Video {...obj}/>
      <Video
        title="Mongo DB tutorials"
        views="8K"
        time="5 days ago"
        channel="coder dost">
      </Video>
    </div>
  )
}

export default App;