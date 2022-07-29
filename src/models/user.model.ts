import connection from './connection';
import { AddUserInterface, UserInterface } from '../interfaces/user.interface';

export const addNewUser = async (
  { username, classe, level, password }: AddUserInterface,
): Promise<UserInterface> => {
  const [rows] = await connection
    .execute(`
      INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)
    `, [username, classe, level, password]) as { insertId: number }[];
  return { id: rows.insertId, username, classe, level, password };
};

export default addNewUser;