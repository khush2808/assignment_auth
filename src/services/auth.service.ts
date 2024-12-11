import AuthRepository from "../repositories/auth.respository";
import bcrypt from "bcrypt";

class AuthService {
  async signUp(email: string, password: string) {
    const existingUser = await AuthRepository.findUserByEmail(email);
    if (existingUser) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return AuthRepository.createUser(email, hashedPassword);
  }

  async signIn(email: string, password: string) {
    const user = await AuthRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Invalid credentials");
    }
    return { message: "Sign-in successful" };
  }
}

export default new AuthService();
