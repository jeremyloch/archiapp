import axios from 'axios';
import './App.css';

function App() {
  const callAPI = () => {
    axios.get("http://localhost:8080").then(() => {
      console.log("Connected.");
    })
  }

  return (
    <div className="App">
      <header className="App-header">
          <button onClick={callAPI}>Call API</button>
      </header>
    </div>
  );
}

export default App;
