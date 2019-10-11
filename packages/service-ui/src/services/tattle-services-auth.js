import HTTP from './http'
const AUTH_SERVER_URL = 'http://localhost:3001'
const http = new HTTP(AUTH_SERVER_URL);

const getSignedUrl = (filename, fileType) => (
    http.post('auth/policy', {filename, fileType})
    .then((response) => response.data.signedUrl)
    .catch((err)=> `Error Parsing Server response ${err}` )
)

export {
    getSignedUrl
}