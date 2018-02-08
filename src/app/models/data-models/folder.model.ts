import { FileFolderBase } from './file-folder-base.model';

export class FvsFolder extends FileFolderBase {
    constructor(folder: Partial<FvsFolder> = new FileFolderBase()) {
        super({ ...folder, isFolder: true });
    }
}
