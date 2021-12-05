// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {useEffect, useState } from 'react';
import  {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL:process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCDdZhmDBEPacBuz9ko4bsBGlmvsLUqMzs",
  authDomain: "travel-blog-32e00.firebaseapp.com",
  databaseURL: "https://travel-blog-32e00-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "travel-blog-32e00",
  storageBucket: "travel-blog-32e00.appspot.com",
  messagingSenderId: "261113739716",
  appId: "1:261113739716:web:7a1983454ce5f5cefc0c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, username,password){
 return createUserWithEmailAndPassword(auth, email, username, password);
} 

export function login(email,password){
  return signInWithEmailAndPassword(auth, email, password);
 } 
 

export function logoutUser(){
  return signOut(auth);
}

export function useAuth(){
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
 const unsab=  onAuthStateChanged(auth, user=>setCurrentUser(user))
 return unsab;
    }, [])
  return currentUser;
}