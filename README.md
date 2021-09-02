# Instructions

## Setup
1. Ensure you are connected to the p1 image store: (from terminal)
docker login registry.il2.dso.mil
When prompted for your username, use p1 email and personal code

## Run Options
- npm run devdb with npm run buildfresh
  - postgres in docker with feathers running locally on 8080
- npm run devdocker
  - postgress and feathers in dockers on 8080
- npm run testdocker
  - closed loop docker test of postgress and feathers that runs the jest tests and exits
- npm run burnin [UNIX OS only]
  - postgres and feathers in docker using acutal P1 build files