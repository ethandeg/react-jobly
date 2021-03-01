import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import JoblyApi from "../API"
import Job from "./Job"
const JobPage = () => {
    const {id} = useParams()
    const [job, setJob] = useState(null)
    useEffect(() => {
        const getJob = async() => {
            const res = await JoblyApi.getJob(id)
            setJob(res)
        }
        getJob()
    }, [])
    return (
        <>
        {job ? <Job job={job} />: <h1>Loading..</h1>}
        </>
    )
}

export default JobPage