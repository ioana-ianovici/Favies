import { FvsFile } from './file.model';
import { FvsFolder } from './folder.model';

export class FvsTarget {
    file?: FvsFile;
    folder?: FvsFolder;

    constructor(target: Partial<FvsTarget>) {
        this.file = target.file;
        this.folder = target.folder;
    }
}
