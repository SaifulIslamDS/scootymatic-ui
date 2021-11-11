import { useEffect, useState } from "react";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut 
} from "firebase/auth";

import initializeAuthentication from '../Firebase/firebase.init.js';

initializeAuthentication() ;

const useFirebase = () => {

    const [user, setUser] = useState();
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;  
            setUser(user);
        })
        .catch(error => {
            setError(error.message);
        })

    };

    const handleSignOut = () => {
        signOut(auth)
        .then(() => setUser({}))
    };


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, []);

    return {
        user,
        error,
        handleGoogleLogin,
        handleSignOut
    };
 }

export default useFirebase; 