# PostgreSQL, PGAdmin, Express js, Prisma, Docker, Docker compose

## Running application
```
docker compose up -d
```

### View web application for admin database
* go to [localhost:5555](localhost:5555)
* login with pgadmin4@pgadmin.org/admin
* connect to DB with creds: 
  * hostname: postgres;
  * username/password: postgres

### Expose and save data from database in Postman

* post to [localhost:3000/api/data](localhost:3000/api/data) from your postman this object: 
```
{
    "name": "Alex",
    "email": "Alex@google.com",
    "title": "Software engineer",
    "bio": "Born in Moscow"
}
```

* go to [localhost:3000/api/data](localhost:3000/api/data) for getting data from server, and you will see data like this:

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
