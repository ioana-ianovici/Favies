import { MimeType } from './mime-type.model';

export class Content extends MimeType {
    mimeTypeName?: string;
    encoding?: string;

    constructor(content: Partial<Content>) {
        super({ mimeType: content.mimeType, sizeInBytes: content.sizeInBytes });
        this.mimeTypeName = content.mimeTypeName;
        this.encoding = content.encoding;
    }
}
