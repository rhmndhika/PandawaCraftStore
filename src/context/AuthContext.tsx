import React, {createContext, useContext, useEffect, useState, ReactNode} from "react";
import { auth } from '../utils/init-firebase';
import { GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, UserCredential, signInWithPopup } from "firebase/auth"
import { cleanup } from "@testing-library/react";


type ButtonProps = {
    children: ReactNode;   
}

export const useAuth = () =>useContext(AuthContext);


type AuthContextType = {
    currentUser: null;
    register: (
      email: string,
      password: string,
      username: string,
    ) => Promise<UserCredential | undefined>;
    login: (
        email: string,
        password: string,
        username: string,
      ) => Promise<UserCredential | undefined>;
    logout: () => Promise<any | undefined>;
    signInWithGoogle: () => Promise<any | undefined>
  };

  const AuthContext = createContext<Partial<Omit<AuthContextType, "register" | "login" | "logout" | "signInWithGoogle">> & Pick<AuthContextType, "register" | "login" | "logout" | "signInWithGoogle">>
  ({register: async () => undefined, login: async () => undefined, logout: async () => undefined, signInWithGoogle: async () => undefined}   );


export default function AuthContextProvider( { children}  : ButtonProps){
    const [currentUser, setCurrentUser] = useState<any | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user =>{
            setCurrentUser(user)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    function register(username: string, email: string, password:string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    function login(username: string, email: string, password:string){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout(){
        return signOut(auth);
    }

    function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    const value = {
        currentUser,
        register,
        login,
        logout,
        signInWithGoogle
    }
    
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}



