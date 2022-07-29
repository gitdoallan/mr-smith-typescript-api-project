import { Request, Response } from 'express';
import * as userServices from '../services/user.services';

export const addNewUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, classe, level, password } = req.body;
  const result = await userServices.addNewUser({ username, classe, level, password });
  return res.status(201).json(result);
};

export default addNewUser;
