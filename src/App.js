import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./NavBar"
import JoblyApi from "./API"
import {useState, useEffect} from "react"
import TokenContext from "./context/TokenContext"
import UserContext from "./context/UserContext"
import jwt from "jsonwebtoken"
import useLocalStorage from "./hooks/useLocalStorage"

const TOKEN_STORAGE_ID = 'currUser'

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  const [currentUser, setCurrentUser] = useState(null)
  const [userInfoLoaded, setUserInfoLoaded] = useState(false)
  const [applications, setApplications] = useState(new Set([]))



  const login = async(data) => {
    try {
      let res = await JoblyApi.login(data)
      setToken(res.token)
      return {success: true}
    } catch(e) {
      console.error(e)
      return {success: false}
    }

  }

  const signUp = async(data) => {
    try {
      let res = await JoblyApi.signUp(data)
      setToken(res.token)
      return {success: true}
    } catch(e) {
      console.error(e)
      return {success:false}
    }
  }

  const logout = () => {
    JoblyApi.token = null;
    setToken(null)
    return {success: true}
  }

  function hasAppliedToJob(id) {
    return applications.has(id);
  }

  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.apply(currentUser.username, id);
    setApplications(new Set([...applications, id]))
  }
///on load:
//-should check local storage for token
    //if not token, then should redirect to login page or something
    //else, should make a loading screen
        //request to get user info and set the info to state
        //set userinfoloaded to true





useEffect(() => {
  const getCurentUser = async() => {
    if(token) {
      const {username} = jwt.decode(token)
      JoblyApi.token = token
      let res = await JoblyApi.getCurrentUser(username)
      res.token = token
      setCurrentUser(res)
      setApplications(new Set([...res.applications]))
    }

  }
  getCurentUser()
  setUserInfoLoaded(true)
}, [token])



  //maybe make a separate file for these functions and put them on context so can be accessed anywhere
  if(!userInfoLoaded) return <h1>Loading....</h1>

  return (
    <div className = 'main'>
      <BrowserRouter>
      <TokenContext.Provider value={{token, setToken}}>
          <UserContext.Provider value={{currentUser, setCurrentUser, applyToJob, hasAppliedToJob, applications, setApplications}}>
        <NavBar />
        <Routes login={login} signUp={signUp} logout ={logout}/>
          </UserContext.Provider>
      </TokenContext.Provider>
      </BrowserRouter>
     </div>
  );
}

export default App;
