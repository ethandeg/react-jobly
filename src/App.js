import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom"
import Home from "./Home"
import Companies from "./Companies"
import CompanyPage from "./CompanyPage"
import Jobs from "./Jobs"

function App() {
  return (
    <div className = 'main'>
      
      <BrowserRouter>
      <Link to = "/companies">companies</Link> <Link to ='/'>Home</Link> <Link to ="/jobs">Jobs</Link>
        <Route exact path="/"> <Home /></Route>
        <Route exact path ="/companies"> <Companies /></Route>
        <Route exact path ="/companies/:handle"> <CompanyPage /></Route>
        <Route exact path ="/jobs"> <Jobs /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
