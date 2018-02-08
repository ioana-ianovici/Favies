import { TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
    let favoritesService: any;
    const http: any = jasmine.createSpyObj('http', ['get']);

    beforeEach(async(() => {
        favoritesService = new FavoritesService(http, jasmine.createSpyObj('webApiService', ['getUrl']));
    }));

    it('should create the service', () => {
        expect(favoritesService).toBeTruthy();
    });

    it('getFavorites() should return value', async(() => {
        const response = { json: () => ('response') };
        http.get.and.returnValue(Observable.of(response));

        favoritesService.getFavorites()
            .subscribe((result) => {
                expect(result).toBe('response');
            });
    }));

    it('getFavorites() return error', async(() => {
        http.get.and.returnValue(Observable.throw('error'));

        favoritesService.getFavorites()
            .subscribe((result) => { }, (error) => {
                expect(error).toBeTruthy();
            });
    }));
});
