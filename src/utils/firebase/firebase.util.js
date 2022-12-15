import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import {
    getFirestore,doc,getDoc,setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyB-ifM5_3kOQtAK7KYxAGl_NBOLK9oKZjM",
    authDomain: "crwn-clothing-db-2a312.firebaseapp.com",
    projectId: "crwn-clothing-db-2a312",
    storageBucket: "crwn-clothing-db-2a312.appspot.com",
    messagingSenderId: "725161913808",
    appId: "1:725161913808:web:8bc7e7fcb1c823e0445dd5"
  };
  
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth=async(userAuth)=>{

    const userDocRef = doc(db, 'users', 'userAuth.uid');
const userSnapshot= await getDoc(userDocRef);


if(!userSnapshot.exists()) {
    const { displayName,email} = userAuth;
    const createdAt=new Date();


try{
    await setDoc(userDocRef, {
        displayName,
        email,createdAt
    });

}catch(error) {
 console.log('error in creating the user', error.message)   
}

}

}



