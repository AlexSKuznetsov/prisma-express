const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { addNewPost } = require('./addNewPost');

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/data', async (req, res) => {
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  res.json(allUsers);
});

app.post('/api/data', async (req, res) => {
  await addNewPost(req.body);
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  res.json(allUsers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
