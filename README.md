# PostgreSQL + PGAdmin in Docker,  Express js + Prisma 

## Running DB + admin tool
```
docker compose up
```
* go to localhost:5555
* login with pgadmin4@pgadmin.org/admin
* connect to DB with hostname: postgres; username/password: postgres

## Running backend

* Rename .env.example -> .env
* Run server
```
yarn dev
```
