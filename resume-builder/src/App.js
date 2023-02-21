import Resume from "./Components/Resume"
import './App.css';

function App() {
  let user = {
    name: "Emily",
    education: {
      tenth: 10,
      twelth: 12,
      graduation: "BCA"
    },
    interests: {
      int1: "Drawing",
      int2: "Photography",
      int3: "Dancing"
    },
    skills: {
      skill1: "HTML",
      skill2: "CSS",
      skill3: "JS",
    },
    experience: {
      first: "Amity",
      second: "Certybox",
      third: "Arpan"
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <Resume {...user}></Resume>
      </header>
    </div>
  );
}

export default App;
