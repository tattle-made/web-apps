import axios from 'axios'

// const SERVER_ENDPOINT = '13.233.84.78';
const SERVER_ENDPOINT = 'localhost';
const PORT = '3003'
const API_URL = `http://${SERVER_ENDPOINT}:${PORT}/api`;
const SOCKET_URL = `http://${SERVER_ENDPOINT}:${PORT}/`

const get = (endpoint, token)=>{
    return axios.get(
        `${API_URL}${endpoint}`,
        {
          headers: {
            token
          }
        }
      )
}

const post = (endpoint, payload, token)=>{
    return axios.post(
      `${API_URL}${endpoint}`, 
      payload,
      {
        headers: {
          token
        }
      }
    )
    .then((data) => data.data)
    .catch((err) => console.log('ERROR IN API CALL ',err));
}

export {
    get,
    post,
    API_URL,
    SOCKET_URL
}