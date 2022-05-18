import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../firebase/firebase"

export const authContext = createContext();

export const useAuth = () => {
     const context = useContext(authContext)
     if(!context) throw new Error("there is not auth provider")
     return context;
};
 
export function AuthProvider ({children}) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //Crear una cuenta con email y password
    const singup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password);
    //iniciar sesion con email y password
        const login =(email, password) =>
        signInWithEmailAndPassword(auth, email, password);
    //cerrar sesion 
        const logout = () => signOut(auth) 

       

        useEffect(() => {
            onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false);
            });
        }, []);

    return(
        <authContext.Provider value={{singup, login, user, logout, loading}}>
            {children}
        </authContext.Provider>
    );
}