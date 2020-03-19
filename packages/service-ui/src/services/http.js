import axios from 'axios'

class HTTP {
    constructor(apiUrl){
        this.apiUrl = apiUrl
    }

    post(endpoint, data){
        console.log({
            apiUrl : this.apiUrl,
            endpoint,
            data
        })
        return axios.post(`${this.apiUrl}/${endpoint}`, data)
        .catch((err)=> `Error making API call to ${this.apiUrl}, ${err}`);
    }

    postWithToken = (endpoint, data, token)=>{
        return axios.post(`${this.apiUrl}${endpoint}`, 
          data,
          {
            headers: {token}
          }
          )
        .catch((err) => console.log('ERROR IN API CALL ',err));
      }
}

export default HTTP;