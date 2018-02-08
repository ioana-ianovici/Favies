import { Content } from './content.model';
import { MimeType } from './mime-type.model';
import { UserDetails } from './user-details.model';

export class FileFolderBase extends MimeType {
    name?: string;
    createdAt?: string;
    modifiedAt?: string;
    createdByUser?: UserDetails;
    modifiedByUser?: UserDetails;
    versionLabel?: string;
    isFolder?: boolean;
    isFile?: boolean;
    title?: string;
    guid?: string;
    description?: string;
    createdBy?: string;
    modifiedBy?: string;
    content?: Content;
    parentId?: string;
    id?: string;

    constructor(fileFolderBase?: Partial<FileFolderBase>) {
        if (!fileFolderBase) {
            return;
        }

        super({ mimeType: fileFolderBase.mimeType, sizeInBytes: fileFolderBase.sizeInBytes });
        this.name = fileFolderBase.name;
        this.createdAt = fileFolderBase.createdAt;
        this.modifiedAt = fileFolderBase.modifiedAt;
        this.createdByUser = fileFolderBase.createdByUser;
        this.modifiedByUser = fileFolderBase.modifiedByUser;
        this.versionLabel = fileFolderBase.versionLabel;
        this.isFolder = fileFolderBase.isFolder;
        this.isFile = fileFolderBase.isFile;
        this.title = fileFolderBase.title;
        this.guid = fileFolderBase.guid;
        this.description = fileFolderBase.description;
        this.createdBy = fileFolderBase.createdBy;
        this.modifiedBy = fileFolderBase.modifiedBy;
        this.content = fileFolderBase.content;
        this.parentId = fileFolderBase.parentId;
        this.id = fileFolderBase.id;
    }

    withTitle(title: string): FileFolderBase {
        this.title = title;

        return this;
    }

    withName(name: string): FileFolderBase {
        this.name = name;

        return this;
    }
}
