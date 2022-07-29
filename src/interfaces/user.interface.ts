export interface AddUserInterface {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserInterface extends AddUserInterface {
  id: number;
}
