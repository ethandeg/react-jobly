import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./NavBar"
import JoblyApi from "./API"
import {useState} from "react"
import TokenContext from "./context/TokenContext"

function App() {
  const [token, setToken] = useState()
  const [userData, setUserData] = useState()
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
    console.log(token)
    console.log(JoblyApi.token)
    return {success: true}
  }
  //maybe make a separate file for these functions and put them on context so can be accessed anywhere


  return (
    <div className = 'main'>

      <BrowserRouter>
      <TokenContext.Provider value={{token, setToken}}>
        <NavBar />
        <Routes login={login} signUp={signUp} logout ={logout}/>
        </TokenContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
