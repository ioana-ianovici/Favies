import { Entry } from './entry.model';

export class EntryItem {
    entry?: Entry;

    constructor(entry: Entry) {
        this.entry = entry;
    }
}
