import { Component, OnInit } from '@angular/core';
import { get } from 'lodash';

import { FavoritesService } from './../../services/favorites.service';
import { Favorites } from './../../models/data-models/favorites.model';
import { EntryItem } from './../../models/data-models/entry-item.model';
import { FavoriteItem } from '../../models/favorite-item.model';
import { Constants } from './../../shared/constants';
import { isEqualString } from '../../shared/utils';

@Component({
    selector: 'fvs-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    isLoaded: boolean;
    isError: boolean;
    favorites: Favorites;
    favoriteItems: FavoriteItem[];
    showNames: boolean;

    set displayNameWhenNoTitle(value: boolean) {
        this.showNames = value;
        this.setFavoriteItems();
    }
    get displayNameWhenNoTitle(): boolean {
        return this.showNames;
    }

    constructor(private favoritesService: FavoritesService) { }

    ngOnInit(): void {
        this.favoritesService.getFavorites()
            .subscribe((favorites) => {
                this.isLoaded = true;
                this.favorites = favorites;
                this.setFavoriteItems();
            }, () => {
                this.isLoaded = true;
                this.isError = true;
            });
    }

    setFavoriteItems(): void {
        this.favoriteItems = [];

        if (!this.favorites) {
            return;
        }

        const entries: EntryItem[] = get(this.favorites, ['list', 'entries'], []);

        entries.forEach(item => {
            const type = this.getEntryType(item);

            if (!type) {
                return;
            }

            const cardText = this.getCardTextByType(item, type);

            if (cardText) {
                this.favoriteItems.push(
                    {
                        title: cardText,
                        isFile: isEqualString(type, Constants.ENTRY_TYPE.FILE),
                        isFolder: isEqualString(type, Constants.ENTRY_TYPE.FOLDER)
                    });
            }
        });
    }

    private getEntryType(item: EntryItem): string {
        let type: string;
        const isFile = get(item, ['entry', 'target', 'file', 'isFile']);

        if (isFile) {
            type = Constants.ENTRY_TYPE.FILE;
        } else {
            const isFolder = get(item, ['entry', 'target', 'folder', 'isFolder']);

            if (isFolder) {
                type = Constants.ENTRY_TYPE.FOLDER;
            }
        }

        return type;
    }

    private getCardTextByType(item: EntryItem, type: string): string {
        const title = get(item, ['entry', 'target', type, 'title']);

        if (title) {
            return title;
        } else if (this.showNames) {
            const name = get(item, ['entry', 'target', type, 'name']);

            return name;
        }
    }
}
