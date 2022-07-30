import jwt from 'jsonwebtoken';
import { UserInterface } from '../interfaces/user.interface';

const createToken = (user: UserInterface) => {
  const { id, username, classe, level } = user;
  const newUser = { id, username, classe, level };
  const token = jwt.sign({ data: newUser }, 'umsegredomuitobemguardado' as string, {
    expiresIn: '24h',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;
