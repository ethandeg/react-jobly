import { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import UserContext from "./context/UserContext"
import TokenContext from "./context/TokenContext"

function PrivateRoute({ exact, path, children }) {
  const { currentUser } = useContext(UserContext);
  const { token } = useContext(TokenContext)


  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}


export default PrivateRoute