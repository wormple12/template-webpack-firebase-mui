import { SWSearch } from '@Types/SWSearch';
import IDatabase from '../IDatabase';

class mockupDB implements IDatabase {
    search: SWSearch = { budget: 100, minHDRating: 1.0, preferredPilot: "Luke Skywalker" };

    getSearch(): SWSearch {
        return this.search;
    }
    updateSearch(search: SWSearch): boolean {
        this.search = search;
        return true;
    }
}

export default new mockupDB();