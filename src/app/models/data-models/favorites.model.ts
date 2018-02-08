import { List } from './list.model';

export class Favorites {
    list?: List;

    constructor(list: List) {
        this.list = list;
    }
}
