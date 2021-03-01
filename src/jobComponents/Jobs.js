import {useEffect, useState} from "react"
import JoblyApi from "../API"
import Job from "./Job"
const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getAllJobs = async() => {
            const res = await JoblyApi.getAllJobs()
            console.log(res)
            setJobs(...jobs,res)
        }
        getAllJobs()
    }, [])
    return (
        <>
        {jobs.length ? jobs.map(job => <Job job={job} key={job.id}/>): <h1>Loading...</h1>}
        </>
    )
}

export default Jobs