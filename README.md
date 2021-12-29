# Node.js boilerplate for develop backend app with DB

- TypeScript (https://github.com/Microsoft/TypeScript)
- Express.js (https://github.com/expressjs/express)
- Prisma ORM (https://github.com/prisma/prisma)
- PostgreSQL (https://www.postgresql.org/)
- pgAdmin GUI tool for PostgreSQL (https://www.pgadmin.org/)
- Docker-Compose for running all together

## Requirements:
* docker >= 17.12.0+
* docker-compose

## Quick Start

* Clone or download this repository

```sh
git clone https://github.com/AlexSKuznetsov/prisma-express.git
```

* Run Docker containers

```
cd prisma-express && docker-compose up -d
```

### Access to PGAmin

* go to [localhost:5555](http://localhost:5555)
* login with: `pgadmin4@pgadmin.org / admin` (as a default)
  - **Hostname/address**: `postgres` (as a default)
  - **username/password**: `postgres` (as a default)

### Expose and save data from database in Postman

- Post method to this addres [localhost:3000/api/data](http://localhost:3000/api/data) from your Postman this object:

```
{
    "name": "Alex",
    "email": "Alex@google.com",
    "title": "Software engineer",
    "bio": "Born in Moscow"
}
```

- Get data [localhost:3000/api/data](http://localhost:3000/api/data) and you will see data like this:

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

### You can also run Prisma Studio locally

* Create .env file in the prisma directory with this text

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/TEST_DB?schema=public"
```

* Run Prisma Studio

```sh
npx prisma studio
```

* Open http://localhost:5556 in your browser

Happy coding :)
