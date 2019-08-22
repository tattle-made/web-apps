import HTTP from './http'
const http = new HTTP('http://3.130.147.43:7000');

const extractText = (imageUrl) => (
    http.post('find_text', {image_url: imageUrl})
    .then((response)=>response.data.text)
    .catch((err)=> `Error Parsing Server response ${err}` )
)

export {
    extractText
}