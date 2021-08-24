import { SWSearch } from '@Types/SWSearch';

export default interface IDatabase {
    getSearch(): SWSearch;
    updateSearch(search: SWSearch): boolean,
}