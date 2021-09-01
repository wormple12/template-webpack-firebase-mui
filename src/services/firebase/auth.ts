import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut as signOutOfFirebase } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { userState } from '@State/UserState';
import { defaultUser } from '@Types/User';

export const signIn = async () => {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
}

export const signOut = () => {
    signOutOfFirebase(getAuth());
}

export const isUserSignedIn = (): boolean => {
    return !!getAuth().currentUser;
}

export const initFirebaseAuth = () => {
    onAuthStateChanged(getAuth(), authStateObserver);
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
const authStateObserver = (user) => {
    const setUserState = useSetRecoilState(userState);
    if (user) {
        // User is signed in!
        setUserState({
            displayName: getAuth().currentUser?.displayName,
        });
        // We save the Firebase Messaging Device token and enable notifications.
        // saveMessagingDeviceToken();
    } else {
        // User is signed out!
        setUserState(defaultUser);
    }
}