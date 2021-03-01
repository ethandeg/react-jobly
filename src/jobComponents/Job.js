import {Link} from "react-router-dom"
const Job = ({job}) => {
    //id, title, salary, equity, companyHandle, companyName from get all, job.company.name and job.company.handle from get one
    let companyName = job.companyName ? job.companyName : job.company.name
    let companyHandle = job.companyHandle ? job.companyHandle : job.company.handle
    return (
        // <ul>
        //     <li>{<Link to={`/jobs/${job.id}`}>{job.title}</Link>}</li>
        //     <li>{job.salary}</li>
        //     <li>{job.equity}</li>
        //     <li>{<Link to={`/companies/${companyHandle}`}>{companyName}</Link>}</li>
        //     {/* access company information from job.company */}
        // </ul>
        <div className="card m-3" style={{width: "25rem", display: "inline-block"}}>
     
            <div className="card-body">
                <h5 className="card-title">{<Link to={`/jobs/${job.id}`}>{job.title}</Link>}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.salary}</h6>
                <p className='card-text'>Equity: {job.equity}</p>
                {<Link to={`/jobs/${job.id}`} className="btn btn-primary mx-2">Learn More</Link>}
                {<Link to={`/companies/${companyHandle}`} className="btn btn-primary">{companyName}</Link>}
            </div>
        </div>

    )
//     <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>
}

export default Job