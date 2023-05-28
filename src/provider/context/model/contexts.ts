import { Dispatch, createContext } from 'react';
import { AppStateType } from '../types';

export const MyContext = createContext<AppStateType | null>(null);
export const MyDispatchContext = createContext <Dispatch<any> | null>(null);