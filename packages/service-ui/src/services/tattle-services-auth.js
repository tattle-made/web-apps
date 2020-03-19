import HTTP from './http'
import { ARCHIVE_SERVER_PATH, TOKEN_TEXT_EXTRACT } from '../config';
const http = new HTTP(ARCHIVE_SERVER_PATH);

const getSignedUrl = (filename, fileType) => (
    http.postWithToken('/api/s3-auth', {filename, fileType}, TOKEN_TEXT_EXTRACT)
    .then((response) => response.data.signedUrl)
    .catch((err)=> `Error Parsing Server response ${err}` )
)

export {
    getSignedUrl
}