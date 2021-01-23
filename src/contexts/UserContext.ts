import React, { createContext } from 'react';
import User from '../interfaces/User';


export const UserContext = createContext<User>({ firstName: "", lastName: "", email: ""});



