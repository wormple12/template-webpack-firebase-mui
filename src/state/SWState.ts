import { atom, AtomEffect, selector } from 'recoil';
import db from '@Services/firebase/SWDatabase';
import SWFetcher from '@Services/swapi/swFetcher';
import { recoilPersist } from 'recoil-persist';
import { SWSearch } from '@Types/SWSearch';

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: sessionStorage,
});
const syncStorageEffect: AtomEffect<SWSearch> = ({ onSet }) => {
    // Subscribe to local changes and update the server value
    let updateController: any = undefined;

    onSet((searchState) => {
        clearTimeout(updateController);
        updateController = setTimeout(() => {
            db.updateSearch(searchState as SWSearch);
        }, 2500);
    });
};

const getInitialState = selector({
    key: 'SWState/Search/Default',
    get: async ({ get }) => {
        return await db.getSearch();
    }
});

const searchState = atom({
    key: 'SWState/Search',
    default: getInitialState,
    effects_UNSTABLE: [persistAtom, syncStorageEffect],
});

const starshipState = selector({
    key: 'SWState/Starships',
    get: ({ get }) => {
        const search = get(searchState);
        return SWFetcher.getStarshipsWithReqs(search.budget, search.minHDRating);
    }
})

const pilotState = selector({
    key: 'SWState/Pilot',
    get: ({ get }) => {
        return SWFetcher.getPilot(get(searchState).preferredPilot);
    }
})

export { searchState as swSearchState, starshipState as swStarshipState, pilotState as swPilotState };