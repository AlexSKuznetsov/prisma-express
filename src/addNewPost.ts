import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Params {
  name: string;
  email: string;
  title: string;
  bio: string;
}

export const addNewPost = async (params: Params) => {
  const { name, email, title, bio } = params;

  const result = await prisma.user.create({
    data: {
      name,
      email,
      posts: {
        create: { title },
      },
      profile: {
        create: { bio },
      },
    },
  });
  return result;
};
