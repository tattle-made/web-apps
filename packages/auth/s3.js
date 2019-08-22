const AWS = require('aws-sdk')
require('dotenv').config()
// const credentials = new AWS.SharedIniFileCredentials({profile: 'tattle-services'});
// console.log(credentials)

console.log('===credentials===')
console.log(process.env);

var credentials = {
    accessKeyId: '',
    secretAccessKey : ''
};


AWS.config.update({credentials: credentials, region: 'ap-south-1'});
const s3 = new AWS.S3()

module.exports = {
    s3
}