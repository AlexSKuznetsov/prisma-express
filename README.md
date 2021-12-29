# Node.js boilerplate for develop backend app with DB

- TypeScript (https://github.com/Microsoft/TypeScript)
- Express.js (https://github.com/expressjs/express)
- Prisma ORM (https://github.com/prisma/prisma)
- PostgreSQL (https://www.postgresql.org/)
- pgAdmin GUI tool for PostgreSQL (https://www.pgadmin.org/)
- Docker-Compose for running all together

## Running application

Copy dist

```sh
git clone https://github.com/AlexSKuznetsov/prisma-express.git
```

Running Docker containers. 

```
cd prisma-express && docker-compose up -d
```

### Access to PGAmin for admin your PostgreSQL with GUI

- go to [localhost:5555](localhost:5555)
- login with pgadmin4@pgadmin.org / admin
- connect to DB with this credentials:
  - hostname: postgres;
  - username/password: postgres

### Expose and save data from database in Postman

- post to [localhost:3000/api/data](localhost:3000/api/data) from your Postman this object:

```
{
    "name": "Alex",
    "email": "Alex@google.com",
    "title": "Software engineer",
    "bio": "Born in Moscow"
}
```

- go to [localhost:3000/api/data](localhost:3000/api/data) for getting data from server, and you will see data like this:

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

### You can also run Prisma Studio localy

Create .env file in the prisma directory with this text

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/TEST_DB?schema=public"
```

Run Prisma Studio

```sh
npx prisma studio
```

Open http://localhost:5556 in your browser
