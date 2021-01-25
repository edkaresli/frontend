
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default interface ILoggedUser {
  email: string; 
  accessToken: string;
  setLoggedUser(e: string, a: string): void;
}

export class LoggedUser implements ILoggedUser {
  email: string;
  accessToken: string;

  constructor(e: string, a: string) {
    this.email = e;
    this.accessToken = a;
  }

  setLoggedUser(e: string, a: string) {
    this.email = e;
    this.accessToken = a;
  }
}