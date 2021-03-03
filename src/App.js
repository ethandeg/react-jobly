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

function App() {
  const [token, setToken] = useState()
  const [currentUser, setCurrentUser] = useState(null)
  const [userInfoLoaded, setUserInfoLoaded] = useState(false)
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

useEffect(() => {
  const getCurentUser = async() => {
    if(token) {
      const {username} = jwt.decode(token)
      let res = await JoblyApi.getCurrentUser(username)
      setCurrentUser(res)
    }
  }
  getCurentUser()
}, [token])



  //maybe make a separate file for these functions and put them on context so can be accessed anywhere


  return (
    <div className = 'main'>
      <BrowserRouter>
      <TokenContext.Provider value={{token, setToken}}>
          <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <NavBar />
        <Routes login={login} signUp={signUp} logout ={logout}/>
          </UserContext.Provider>
      </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
