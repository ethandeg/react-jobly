import {useState, useEffect} from "react"
import JoblyApi from "../API"
import Company from "./Company"
import CompanySearchForm from "./CompanySearchForm"

const Companies = () => {
    const [data, setData] = useState({})
    const [companies, setCompanies] = useState([])
    const search = (d) => {
        console.log(d)
        setData(d)
        console.log(data)
    }
    useEffect(() => {
        const getCompanies =  async() => {
            const res = await JoblyApi.getAllCompanies(data)
            setCompanies(...companies, res)
        }
        getCompanies()
    },[data]) 

    // handle,
    //                    name,
    //                    num_employees,
    //                    description,
    //                    logo_url
    return (
        <>
        <CompanySearchForm search={search}/>
        {companies.length ? 
        companies.map(company => <Company company={company} key={company.handle}/>)
        : <h1>Loading</h1>}
        </>
    )
}
export default Companies