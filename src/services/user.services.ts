import * as userModel from '../models/user.model';
import { AddUserInterface } from '../interfaces/user.interface';
import TokenInterface from '../interfaces/token.interface';
import createToken from '../utils/jwt';

export const addNewUser = async (
  { username, classe, level, password }: AddUserInterface,
): Promise<TokenInterface> => {
  const rows = await userModel.addNewUser({ username, classe, level, password });
  const token = createToken(rows);
  return { token };
};

export default addNewUser;
