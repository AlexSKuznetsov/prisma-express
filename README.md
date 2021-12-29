# All in one Node.js boilerplate for develop backend API-based App with DB

- TypeScript (https://github.com/Microsoft/TypeScript)
- Express.js (https://github.com/expressjs/express)
- Prisma ORM (https://github.com/prisma/prisma)
- PostgreSQL (https://www.postgresql.org/)
- pgAdmin GUI tool for PostgreSQL (https://www.pgadmin.org/)
- Docker-Compose for running all together

## Requirements:

- docker >= 17.12.0+
- docker-compose

## Quick Start

- Clone or download this repository

```sh
git clone https://github.com/AlexSKuznetsov/prisma-express.git
```

- Run Docker containers

```
cd prisma-express && docker-compose up -d
```

### Access to PGAmin

- go to [localhost:5555](http://localhost:5555)
- login with: `pgadmin4@pgadmin.org / admin` (as a default)
  - **Hostname/address**: `postgres` (as a default)
  - **username/password**: `postgres` (as a default)

## Using the REST API

### `POST`

- `/api/data`: Create a new user
  - Body:

```
{
    "name": "Alex",
    "email": "Alex@google.com",
    "title": "Software engineer",
    "bio": "Born in Moscow"
}
```

### `GET`

- `api/data`: get all data

```
[
    {
        "id": 1,
        "email": "Alex@google.com",
        "name": "Alex",
        "posts": [
            {
                "id": 1,
                "createdAt": "2021-08-14T17:17:27.787Z",
                "updatedAt": "2021-08-14T17:17:27.789Z",
                "title": "Software engineer",
                "content": null,
                "published": false,
                "authorId": 1
            }
        ],
        "profile": {
            "id": 1,
            "bio": "Born in Moscow",
            "userId": 1
        }
    }
]
```

## Local Development workarounds

### Requirements:

- Node.js 14 version or higher

---

- Stop Prisma container `docker stop prisma-api` (container name from .yml file)
- **Make sure that you have `.env` file inside prisma directory with this content**

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/TEST_DB?schema=public"
```

- Install dependencies `npm i`
- Run `npx prisma generate` for recreating connection
- Run `npm run dev` for statring local API server

### You can also run Prisma Studio locally (basic visual interface to access DB)

- Run `npx prisma studio`
- Open http://localhost:5556

> Let's say you made changes to Prisma API server source code and want to check how it works together with the rest of the Docker services.

- You can recreate only one compose service: `docker-compose up -d --force-recreate --no-deps prisma-app`

- Or recreate all the containers: `docker-compose up -d --build --force-recreate`

Happy coding :)
