import { atom, selector, AtomEffect } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { User, defaultUser } from '@Types/User';
import { isUserSignedIn } from '@Services/firebase/auth';

const { persistAtom } = recoilPersist();

const syncAuthEffect: AtomEffect<boolean> = ({ setSelf, trigger }) => {
    // Initialize atom value to the auth state
    if (trigger === 'get') { // Avoid expensive initialization
        setSelf(isUserSignedIn());
    }

    // Subscribe to auth changes and update the atom value
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
        if (user) {
            // User is signed in!
            setSelf(true);
            // We save the Firebase Messaging Device token and enable notifications.
            // saveMessagingDeviceToken();
        } else {
            // User is signed out!
            setSelf(false);
        }
    });

    // Cleanup auth subscription
    return () => {
        unsubscribe();
    };
};

const userAuthState = atom<boolean>({
    key: 'UserState/Auth',
    default: false,
    effects_UNSTABLE: [persistAtom, syncAuthEffect],
});

const userDataState = selector<User>({
    key: 'UserState/Data',
    get: ({ get }) => {
        if (get(userAuthState) === true)
            return {
                displayName: getAuth().currentUser?.displayName,
            };
        else
            return defaultUser;
    }
});

export { userDataState, userAuthState };