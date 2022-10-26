import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //signin with google
    const signInByGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //signin with github
    const signInByGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    //signin with email and password 
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signup with email password 
    const emPasSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user data after signup
    const updateUserData = (name, photo) => {
        setLoading(true)
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //Send email verfication to register user
    const userEmailVerify = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    //reset user password 
    const userPassReset = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }


    //signout user
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth);
    }
    //get current user data
    useEffect(() => {
        const un = onAuthStateChanged(auth, (cUser) => {
            setLoading(false)
            setUser(cUser);
        });
        return () => un();
    }, [])



    //passing all of the variable and functions 
    const authInfo = {
        user,
        signInByGoogle,
        logoutUser,
        emPasSignUp,
        updateUserData,
        userEmailVerify,
        userSignIn,
        userPassReset,
        setLoading,
        signInByGithub,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;