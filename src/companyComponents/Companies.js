import {useState, useEffect} from "react"
import JoblyApi from "../API"
import Company from "./Company"
import CompanySearchForm from "./CompanySearchForm"

const Companies = () => {
    const [companies, setCompanies] = useState([])
    const search = async(d) => {
        console.log(d)
        const res = await JoblyApi.getAllCompanies(d)
        console.log(res)
        setCompanies(res)
    }
    useEffect(() => {
        const getCompanies =  async() => {
            const res = await JoblyApi.getAllCompanies()
            setCompanies(res)
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
        <CompanySearchForm search={search}/>
        {companies.length ? 
        companies.map(company => <Company company={company} key={company.handle}/>)
        : <h1>Loading</h1>}
        </>
    )
}
export default Companies