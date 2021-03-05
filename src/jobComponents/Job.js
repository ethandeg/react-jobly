import {Link} from "react-router-dom"
import {useContext, useState, useEffect} from "react"
import UserContext from "../context/UserContext"
import JoblyApi from "../API"
const Job = ({job}) => {
        const {applyToJob, hasAppliedToJob, currentUser} = useContext(UserContext)
        const [applied, setApplied] = useState();
      
        useEffect(function updateAppliedStatus() {
          setApplied(hasAppliedToJob(job.id));
        }, [job.id, hasAppliedToJob]);
      
        /** Apply for a job */
        async function handleApply() {
          if (hasAppliedToJob(job.id)) return;
          applyToJob(job.id);
          setApplied(true);
        }
      
    //id, title, salary, equity, companyHandle, companyName from get all, job.company.name and job.company.handle from get one
    let companyName = job.companyName ? job.companyName : job.company.name
    let companyHandle = job.companyHandle ? job.companyHandle : job.company.handle
    const btnText = hasAppliedToJob(job.id) ? "Applied" : "Apply"
    // const handleApply = async() => {
    //     try {
    //         let res = await JoblyApi.apply(currentUser.username, job.id)
    //         console.log(res)
    //         setApplications(new Set([...applications, res]))
    //         return res
    //     } catch(e) {

    //     }

    // }
    return (

        <div className="card m-3" style={{width: "25rem", display: "inline-block"}}>
     
            <div className="card-body">
                <h5 className="card-title">{<Link to={`/jobs/${job.id}`}>{job.title}</Link>}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.salary}</h6>
                <p className='card-text'>Equity: {job.equity}</p>
                {/* {<Link to={`/jobs/${job.id}`} className="btn btn-primary mx-2">Apply for this job</Link>} */}
                {<Link to={`/companies/${companyHandle}`} className="btn btn-primary">{companyName}</Link>}
                <button className="btn btn-outline-info" onClick={handleApply}>{btnText}</button>
            </div>
        </div>

    )

}

export default Job