import prisma from "../models/prisma";

class AuthRepository {
  async createUser(email: string, password: string) {
    const result = await prisma.user.create({
      data: { email, password },
      select: {
        id: true,
        email: true,
        // ...other fields you want to include...
      },
    });
    return result;
  }

  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
}

export default new AuthRepository();
