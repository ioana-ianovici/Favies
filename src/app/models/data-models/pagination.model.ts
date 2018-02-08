export class Pagination {
    count?: number;
    hasMoreItems?: boolean;
    totalItems?: number;
    skipCount?: number;
    maxItems?: number;

    constructor(pagination: Partial<Pagination>) {
        this.count = pagination.count;
        this.hasMoreItems = pagination.hasMoreItems;
        this.totalItems = pagination.totalItems;
        this.skipCount = pagination.skipCount;
        this.maxItems = pagination.maxItems;
    }
}
