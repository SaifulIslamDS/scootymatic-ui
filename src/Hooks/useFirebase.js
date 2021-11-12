import { useEffect, useState } from "react";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification, 
    sendPasswordResetEmail,
    updateProfile, 
    signOut 
} from "firebase/auth";

import initializeAuthentication from '../Firebase/firebase.init.js';

initializeAuthentication() ;



const useFirebase = () => {

    const [user, setUser] = useState({});
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };
    
    /* const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;  
            setUser(user);
        })
        .catch(error => {
            setError(error.message);
        })

    }; */

        // Handle registration 
   const handleRegistration = e => {
       console.log(userEmail, password);
       if (password.length < 6) {
           setError('The password should be at least 6 characters long')
           return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }
        if (isLogIn) {
            processLogin(userEmail, password);
        } else {
            registerNewUser(userEmail, password);
        ;} 

        e.preventDefault();
    };

     // Process login
     const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };
      // Register new user 
      const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, userEmail, password)
        .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        verifyEmail();
        setDisplayName();
        })
        .catch(error => {
        const errorMessage = error.message;
        setError(errorMessage);
        });
    };

      // Set User Name 
      const setDisplayName = () => {
        updateProfile(auth.currentUser, {
        displayName: userName
        })
        .then(result => {});
    };
    // Email verification 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => { })
    };

    // Handle reset password 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
        .then(result => { })
    };
    // Handle Name Change 
    const handleNameChange = e => {
        setUserName(e.target.value)
    }
    // Handle Email Change 
    const handleEmailChange = e => {
        setUserEmail(e.target.value);
    }
    // Handle Password Change 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    //Toggle login
    const toggleLogin = e => {
        setIsLogIn(e.target.checked);
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        setUser({});
        }).catch((error) => {
        // An error happened.
        });
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
        userName,
        userEmail,
        password,
        error,
        isLogIn,
        handleGoogleLogin,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handleResetPassword,
        handlePasswordChange,
        toggleLogin,
        handleSignOut
    };
 }

export default useFirebase; 