import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./NavBar"

function App() {
  return (
    <div className = 'main'>

      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
