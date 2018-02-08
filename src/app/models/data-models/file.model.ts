import { FileFolderBase } from './file-folder-base.model';

export class FvsFile extends FileFolderBase {
    constructor(file: Partial<FvsFile> = new FileFolderBase()) {
        super({ ...file, isFile: true });
    }
}
