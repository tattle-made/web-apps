const AWS = require('aws-sdk')
require('dotenv').config()

var credentials = {
    accessKeyId: process.env.TATTLE_SERVICE_AWS_ACCESS_KEY,
    secretAccessKey : process.env.TATTLE_SERVICE_AWS_SECRET_KEY
};

console.log('===credentials===')
console.log(credentials)

AWS.config.update({credentials: credentials, region: 'ap-south-1'});
const s3 = new AWS.S3()

module.exports = {
    s3
}