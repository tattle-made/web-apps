import HTTP from './http'
const http = new HTTP('http://13.235.141.145:3000');

const getSignedUrl = (filename, fileType) => (
    http.post('auth/policy', {filename, fileType})
    .then((response) => response.data.signedUrl)
    .catch((err)=> `Error Parsing Server response ${err}` )
)

export {
    getSignedUrl
}