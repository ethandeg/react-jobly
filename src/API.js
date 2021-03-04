import axios from "axios";
import Job from "./jobComponents/Job";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getAllCompanies(filters) {
    let res = await this.request('companies', filters)
    return res.companies
  }

  static async getAllJobs(filters) { 

    let res = await this.request('jobs', filters)
    return res.jobs
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job
    
  }

  static async login(userData) {
    let res = await this.request('auth/token', userData, 'post')
    JoblyApi.token = res.token
    return res
  }

  static async signUp (userData) {
    let res = await this.request('auth/register', userData, 'post')
    JoblyApi.token = res.token
    return res
  }

  static async getCurrentUser (username) {
    let res = await this.request(`users/${username}`)
    return res.user
  }

  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)


export default JoblyApi
