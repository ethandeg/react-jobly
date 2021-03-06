import {useEffect, useState, useContext} from "react"
import JoblyApi from "../API"
import Job from "./Job"
import JobSearchForm from "./JobSearchForm"
import UserContext from "../context/UserContext"

const Jobs = () => {
    let noResults = false
    const {applications} = useContext(UserContext)
    console.log(applications)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getAllJobs = async() => {
            const res = await JoblyApi.getAllJobs()
            setJobs(res)
            noResults = res.length ? false : true
        }
        getAllJobs()
    }, [])

    const search = async(data) => {
        let res = await JoblyApi.getAllJobs(data)
        setJobs(res)
    }

    if(noResults) return <h1 className="display-1 text-danger">Sorry, no results found :(</h1>

    return (
        <div className="container">
        <JobSearchForm search={search}/>
        {jobs.length ? jobs.map(job => <Job job={job} key={job.id}/>): <h1>Loading...</h1>}
        </div>
    )
}

export default Jobs