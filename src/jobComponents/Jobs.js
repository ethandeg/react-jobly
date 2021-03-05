import {useEffect, useState, useContext} from "react"
import JoblyApi from "../API"
import Job from "./Job"
import JobSearchForm from "./JobSearchForm"
import UserContext from "../context/UserContext"

const Jobs = () => {
    const {applications} = useContext(UserContext)
    console.log(applications)
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getAllJobs = async() => {
            const res = await JoblyApi.getAllJobs()

            setJobs(res)
        }
        getAllJobs()
    }, [])

    const search = async(data) => {
        let res = await JoblyApi.getAllJobs(data)
        setJobs(res)
    }
    return (
        <>
        <JobSearchForm search={search}/>
        {jobs.length ? jobs.map(job => <Job job={job} key={job.id}/>): <h1>Loading...</h1>}
        </>
    )
}

export default Jobs