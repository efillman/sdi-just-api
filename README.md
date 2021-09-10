# Instructions

## Setup
1. Ensure you are connected to the p1 image store: (from terminal)
docker login registry.il2.dso.mil
When prompted for your username, use p1 email and personal code

### Local Environmental Variables
export PG_USER=PG_USER
export APP_DB_ADMIN_PASSWORD=password
export PGHOST=localhost
export PGPORT=5432
export PORT=8080
export PG_DATABASE=PG_DATABASE

## Run Options
- npm run devdb with npm run dev (make sure to local environmental variables set)
  - postgres in docker with feathers running locally on 8080
  - changes will be reflected
  - must manually kill docker db if to do other stuff
- npm run devdocker
  - postgress and feathers in dockers on 8080
  - local changes will not be reflected
- npm run testdocker
  - closed loop docker test of postgress and feathers that runs the jest tests and exits
- npm run burnin [UNIX OS only]
  - postgres and feathers in docker using acutal P1 build files