export class MimeType {
    mimeType?: string;
    sizeInBytes?: number;

    constructor(mimeType: Partial<MimeType>) {
        this.mimeType = mimeType.mimeType;
        this.sizeInBytes = mimeType.sizeInBytes;
    }
}
