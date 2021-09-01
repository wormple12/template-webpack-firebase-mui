import { doc, getDoc, setDoc } from '@firebase/firestore';
import { firestore } from './firebase.config';
import { SWSearch, defaultSWSearch } from '@Types/SWSearch';

class SWDatabase {
    async getSearch(): Promise<SWSearch> {
        const docSnap = await getDoc(doc(firestore, 'tempData', 'SWSearch'));
        if (docSnap.exists()) return docSnap.data() as SWSearch;
        else return defaultSWSearch;
    }
    async updateSearch(search: SWSearch): Promise<void> {
        return await setDoc(doc(firestore, 'tempData', 'SWSearch'), search);
    }
}

export default new SWDatabase();