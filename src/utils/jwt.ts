import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { UserInterface } from '../interfaces/user.interface';

dotenv.config();

const createToken = (user: UserInterface) => {
  const { id, username, classe, level } = user;
  const newUser = { id, username, classe, level };
  const token = jwt.sign({ data: newUser }, process.env.JWT_SECRET as string, {
    expiresIn: '24h',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;
