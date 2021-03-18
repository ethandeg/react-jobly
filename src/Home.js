import { Link } from "react-router-dom"
import { useContext } from "react"
import TokenContext from "./context/TokenContext"
import logo from "./assets/logo.png"
const Home = () => {
    const { token, setToken } = useContext(TokenContext)
    return (
        <div className="container-fluid bg-secondary bg-light pt-4" style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
            <h1 className="display-1 text-info">Welcome to <img src={logo} style={{ height: "18rem" }} /></h1>

            <div className="pt-6 mt-5">
                {token ?
                    null
                    :
                    <>
                        <Link className="btn btn-md btn-outline-primary mx-5 px-5" to="/login" style={{ display: "inline-block" }}>Login</Link>
                        <Link className="btn btn-md btn-outline-success mx-5 px-5" to="/signup" style={{ display: "inline-block" }}>Sign Up</Link>
                    </>
                }

            </div>

        </div>
    )
}

export default Home