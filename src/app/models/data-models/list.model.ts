import { Pagination } from './pagination.model';
import { EntryItem } from './entry-item.model';

export class List {
    pagination?: Pagination;
    entries?: Array<EntryItem>;

    constructor(list: Partial<List>) {
        this.entries = list.entries;
        this.pagination = list.pagination;
    }
}
