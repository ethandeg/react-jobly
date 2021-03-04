import {Route, Switch} from "react-router-dom"
import Home from "./Home"
import Companies from "./companyComponents/Companies"
import CompanyPage from "./companyComponents/CompanyPage"
import Jobs from "./jobComponents/Jobs"
import JobPage from "./jobComponents/JobPage"
import LoginForm from "./authForms/LoginForm"
import SignUpForm from "./authForms/SignUpForm"
import Profile from "./Profile"
import PrivateRoute from "./PrivateRoute"

const Routes = ({login, signUp, logout, users}) => {
    return (
        <>
        <Switch>
            <Route exact path="/"> <Home /></Route>
            <PrivateRoute exact path ="/companies"> <Companies /></PrivateRoute>
            <PrivateRoute exact path ="/companies/:handle"> <CompanyPage /></PrivateRoute>
            <PrivateRoute exact path ="/jobs"> <Jobs /></PrivateRoute>
            <PrivateRoute exact path = "/jobs/:id"> <JobPage /></PrivateRoute>
            <Route exact path = "/login"> <LoginForm login={login}/></Route>
            <Route exact path = "/signup"> <SignUpForm signUp={signUp}/></Route>
            <PrivateRoute exact path = "/profile"> <Profile logout={logout}/></PrivateRoute>
        </Switch>
        </>
    )
}

export default Routes