import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as signOutOfFirebase } from 'firebase/auth';

export const getCurrentUserID = (): string | undefined => {
   return getAuth().currentUser?.uid;
};

export const signIn = async (): Promise<void> => {
   // Sign in Firebase using popup auth and Google as the identity provider.
   const provider = new GoogleAuthProvider();
   await signInWithPopup(getAuth(), provider);
};

export const signOut = (): void => {
   signOutOfFirebase(getAuth());
};

export const isUserSignedIn = (): boolean => {
   return !!getAuth().currentUser;
};
