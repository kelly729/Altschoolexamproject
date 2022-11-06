import { useContext,createContext, useEffect } from "react";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState({})
    const googleSignIn=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }
    const logOut=()=>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(curr)=>{
            setUser(curr)
            console.log("user",user)
        })
        return()=>{
            unsubscribe()

        }
    })
    return (
        <AuthContext.Provider value={{googleSignIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}
export const UserAuth=()=>{
    return useContext(AuthContext)
}
