import React, { createContext } from 'react';
import { LoggedUser } from '../interfaces/User';

const loggedUser: LoggedUser = new LoggedUser('', '');

export type LoggedUserType = {
    email: string;
    accessToken: string;
    // setLoggedUser: React.Dispatch<React.SetStateAction<LoggedUser>>; //(e: string, a: string) => void;
}

export const LoggedUserContext = createContext<LoggedUserType>({email: '', accessToken: ''});



