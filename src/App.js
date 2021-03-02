import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Routes from "./Routes"
import NavBar from "./NavBar"
import JoblyApi from "./API"
import {useState} from "react"

function App() {
  const [token, setToken] = useState()
  const [userData, setUserData] = useState()
  const login = async(data) => {
    try {
      let res = await JoblyApi.login(data)
      setToken(res.token)
      console.log(token)
      return {success: true}
    } catch(e) {
      console.error(e)
      return {success: false}
    }

  }
  //maybe make a separate file for these functions and put them on context so can be accessed anywhere

  const logout = async() => {

  }
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
