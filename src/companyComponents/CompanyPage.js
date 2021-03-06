import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import JoblyApi from "../API"
import Company from "./Company"
import Job from "../jobComponents/Job"
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
        <div style={{textAlign: "center"}} className="text-info">
        {company ?
        <> 
            <h1 className="display-1">{company.name}</h1>
            {company.jobs.map(job => (
                <Job job={{...job, companyName: company.name, companyHandle: company.handle}} key={job.id}/>
            ))}

        </>
        : <h1>Loading...</h1>}
        </div>
    )
}

export default CompanyPage