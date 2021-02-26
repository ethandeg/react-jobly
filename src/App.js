import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom"
import Home from "./Home"
import Companies from "./Companies"
import CompanyPage from "./CompanyPage"

function App() {
  return (
    <div className = 'main'>
      <Link to = "/companies">companies</Link>
      <BrowserRouter>
        <Route exact path="/"> <Home /></Route>
        <Route exact path ="/companies"> <Companies /></Route>
        <Route exact path ="/companies/:handle"> <CompanyPage /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
