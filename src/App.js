import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (
    <div className="main">
      <NavBar />
      <div className="main-content">
        <Home/> 
        {/* Other main content components */}
      </div>
    </div>
  );
}

export default App;