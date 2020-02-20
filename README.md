# Mono Repo for Tattle Apps

### Development 
## UI Prototyping
The ui-prototyping app is a gatsby app that can be used to develop and prototype UI related features.
the core ui components are in the package ui. 
To develop new features, it is recommended to have both these packages open in your IDE and run

```lerna run develop watch --stream --scope @tattle/ui-sandbox```
then watch localhost:3000

This will start the gatsby app in develop mode supporting hot reload of changes. 

I recommend opening your IDE and a browser side by side to see changes in real time.


## Deploy

Push to github and based on the branch [development, master] your site will get deployed to the staging endpoint or production endpoint
