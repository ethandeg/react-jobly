import {Link, BrowserRouter} from "react-router-dom"
const Company = (props) => {
    const {handle, numEmployees, name, logoUrl, description} = props.company;
    return (
        <ul>
            <BrowserRouter>
            <li>{<Link to={`/companies/${handle}`}>{handle}</Link>}</li>
            </BrowserRouter>
            <li>{numEmployees}</li>
            <li>{name}</li>
            <li>{logoUrl}</li>
            <li>{description}</li>
        </ul>
    )
}

export default Company