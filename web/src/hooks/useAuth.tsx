import React, { createContext, useContext, useState } from 'react';
import api from '../api';
import { IUser } from '../models';

interface AuthState{
    user: IUser,
    token: string
}

interface AuthContextData {
    user: IUser,
    token: string,
    login(cred: LoginCredentials): void,
    logout():void 
}

interface LoginCredentials {
    email: string,
    password: string
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
	const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Project:token');
        const user = localStorage.getItem('@Project:user');

        if (user && token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            return { user: JSON.parse(user), token };
        }
        

        return {} as AuthState;
  });
    
	const login = async ({email, password}: LoginCredentials) => {
      const response = await api.post('/sessions/login/', {
          email,
          password,
      });

      const { token, user } = response.data;
      localStorage.setItem('@Project:token', token);
      localStorage.setItem('@Project:user', JSON.stringify(user));

      

      setUserData({ token, user });

    };
    

    const logout = () => {
        localStorage.removeItem('@Project:user');
        localStorage.removeItem('@Project:token');
    
        setUserData({} as AuthState);
    };
    
    

  return (
    <AuthContext.Provider value={{logout,login, token: userData.token, user: userData.user}}> 
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext)
    return context
}