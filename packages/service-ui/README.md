# Tattle Services UI

## Deployment

### Development Endpoint 

* UI : https://services-dev.tattle.co.in
* Server URL : https://services-server-dev.tattle.co.in

The webpage is hosted on an aws s3 bucket and served via aws cloudfront. Cloudfront caches files and somtimes it might take a while for new changes to be visible on the above URL. 
use this s3 endpoint for more uptodate feedback - http://services-dev.tattle.co.in.s3-website.ap-south-1.amazonaws.com/

### Production Endpoint 

* UI : https://services.tattle.co.in
* Server URL : https://services-server.tattle.co.in


### Instructions specific for Fact Checking Dashboard:

Make changes to following:
* packages/service-ui/src/data
*  packages/service-ui/src/data/index.js
* packages/service-ui/src/config/factcheck-dashboard.js
