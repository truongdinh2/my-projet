import {createContext} from 'react';
export const ClassNameCtx = createContext('null');
export const Authentic = createContext({
    auth:'null',
    setAuth:()=>{}
});