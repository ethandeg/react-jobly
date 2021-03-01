import {Route} from "react-router-dom"
import Home from "./Home"
import Companies from "./companyComponents/Companies"
import CompanyPage from "./companyComponents/CompanyPage"
import Jobs from "./jobComponents/Jobs"
import JobPage from "./jobComponents/JobPage"
import LoginForm from "./authForms/LoginForm"
import SignUpForm from "./authForms/SignUpForm"
import Profile from "./Profile"

const Routes = () => {
    return (
        <>
        <Route exact path="/"> <Home /></Route>
        <Route exact path ="/companies"> <Companies /></Route>
        <Route exact path ="/companies/:handle"> <CompanyPage /></Route>
        <Route exact path ="/jobs"> <Jobs /></Route>
        <Route exact path = "/jobs/:id"> <JobPage /></Route>
        <Route exact path = "/login"> <LoginForm /></Route>
        <Route exact path = "/signup"> <SignUpForm /></Route>
        <Route exact path = "/profile"> <Profile /></Route>
        </>
    )
}

export default Routes