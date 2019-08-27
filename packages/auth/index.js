const {s3Credentials} = require('./aws-auth')
const express = require('express')
const app = express()
const port = 3000
const {s3} = require('./s3')




app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000"); 
    res.header("Access-Control-Allow-Origin", "http://tattle-websites.s3-website.ap-south-1.amazonaws.com"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/auth/policy', (req, res)=>{
    console.log(req.body);
    s3.getSignedUrl('putObject', {
        Bucket: 'tattle-services',
        Key: req.body.filename,
        ContentType: req.body.fileType,
        Expires: 300,
      }, (err, url)=>{
          if(err) console.log(err)
          else {
            res.json({signedUrl: url})
          }
      })
})

app.get('/', (req, res)=>{
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))