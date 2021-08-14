const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const addNewPost = async (params) => {
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
    }
  })
  return result;
}

module.exports = {
  addNewPost
}

