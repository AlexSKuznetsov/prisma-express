import express, { Application, Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
import { addNewPost, Params } from "./addNewPost";

const prisma = new PrismaClient();

const app: Application = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_req, res: Response) => {
  res.send(`Server is running on port: ${port}`);
});

app.get("/api/data", async (_req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    res.json(allUsers);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

app.post("/api/data", async (req: Request, res: Response) => {
  const body = req.body as Params;
  if (body && body.name && body.email && body.title) {
    await addNewPost(body);
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });
    return res.json(allUsers);
  }
  res.send("It seems that you forgot to send a data");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
