import { FvsTarget } from './target.model';

export class Entry {
    targetGuid?: string;
    target?: FvsTarget;

    constructor(entry: Partial<Entry>) {
        this.targetGuid = entry.targetGuid;
        this.target = entry.target;
    }
}
