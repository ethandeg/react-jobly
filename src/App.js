import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from "react-router-dom"
import Home from "./Home"
import Companies from "./companyComponents/Companies"
import CompanyPage from "./companyComponents/CompanyPage"
import Jobs from "./jobComponents/Jobs"
import JobPage from "./jobComponents/JobPage"
import LoginForm from "./authForms/LoginForm"
import SignUpForm from "./authForms/SignUpForm"
import Profile from "./Profile"

function App() {
  return (
    <div className = 'main'>
      
      <BrowserRouter>
      <Link to = "/companies">companies</Link> <Link to ='/'>Home</Link> <Link to ="/jobs">Jobs</Link> <Link to ="/login">Login</Link> <Link to="/signup">Sign Up</Link> <Link to ="/profile">Profile</Link>
        <Route exact path="/"> <Home /></Route>
        <Route exact path ="/companies"> <Companies /></Route>
        <Route exact path ="/companies/:handle"> <CompanyPage /></Route>
        <Route exact path ="/jobs"> <Jobs /></Route>
        <Route exact path = "/jobs/:id"> <JobPage /></Route>
        <Route exact path = "/login"> <LoginForm /></Route>
        <Route exact path = "/signup"> <SignUpForm /></Route>
        <Route exact path = "/profile"> <Profile /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
