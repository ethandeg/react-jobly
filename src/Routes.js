import {Route} from "react-router-dom"
import Home from "./Home"
import Companies from "./companyComponents/Companies"
import CompanyPage from "./companyComponents/CompanyPage"
import Jobs from "./jobComponents/Jobs"
import JobPage from "./jobComponents/JobPage"
import LoginForm from "./authForms/LoginForm"
import SignUpForm from "./authForms/SignUpForm"
import Profile from "./Profile"

const Routes = ({login, signUp, logout}) => {
    return (
        <>
        <Route exact path="/"> <Home /></Route>
        <Route exact path ="/companies"> <Companies /></Route>
        <Route exact path ="/companies/:handle"> <CompanyPage /></Route>
        <Route exact path ="/jobs"> <Jobs /></Route>
        <Route exact path = "/jobs/:id"> <JobPage /></Route>
        <Route exact path = "/login"> <LoginForm login={login}/></Route>
        <Route exact path = "/signup"> <SignUpForm signUp={signUp}/></Route>
        <Route exact path = "/profile"> <Profile logout={logout}/></Route>
        </>
    )
}

export default Routes