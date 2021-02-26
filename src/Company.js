import {Link} from "react-router-dom"
const Company = (props) => {
    const {handle, numEmployees, name, logoUrl, description} = props.company;
    return (
        <ul>
            <li>{handle}</li>
            <li>{numEmployees}</li>
            <li>{name}</li>
            <li>{logoUrl}</li>
            <li>{description}</li>
        </ul>
    )
}

export default Company