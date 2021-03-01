import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import JoblyApi from "../API"
import Company from "./Company"
const CompanyPage = () => {
    const [company, setCompany] = useState(null)
    const {handle} = useParams()
    useEffect(() => {
        const getCompany = async () => {
            const res = await JoblyApi.getCompany(handle)
            setCompany(res)
        }
        getCompany()
    },[])

    return (
        <>
        {company ? <Company company = {company}/>: <h1>Loading...</h1>}
        </>
    )
}

export default CompanyPage