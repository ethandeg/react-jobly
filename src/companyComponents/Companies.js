import {useState, useEffect} from "react"
import JoblyApi from "../API"
import Company from "./Company"

const Companies = () => {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        const getCompanies =  async() => {
            const res = await JoblyApi.getAllCompanies()
            console.log(res)
            setCompanies(...companies, res)
        }
        getCompanies()
    },[]) 

    // handle,
    //                    name,
    //                    num_employees,
    //                    description,
    //                    logo_url
    return (
        <>
        {companies.length ? 
        companies.map(company => <Company company={company} key={company.handle}/>)
        : <h1>Loading</h1>}
        </>
    )
}
export default Companies