import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthContext {
  user: any | null;
  setUser: any | null;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  signUp: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn: async (email: string, password: string) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        signUp: async (email: string, password: string) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
          }
        },
        signOut: async () => {
          try {
            await auth().signOut();
            setUser(null);
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
