import { Request, Response } from "express";
import AuthService from "../services/auth.service";

class AuthController {
  async signUp(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await AuthService.signUp(email, password);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.signIn(email, password);
      res.status(200).json(result);
    } catch (err) {
      res.status(400).json({ error: (err as Error).message });
    }
  }
}

export default new AuthController();
