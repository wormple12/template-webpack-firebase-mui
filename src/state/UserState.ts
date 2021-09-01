import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { User, defaultUser } from '@Types/User';

const { persistAtom } = recoilPersist();

const userState = atom<User>({
    key: 'UserState',
    default: defaultUser,
    effects_UNSTABLE: [persistAtom],
});

export { userState };