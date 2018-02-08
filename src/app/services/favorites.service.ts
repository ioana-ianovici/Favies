import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { WebApiService } from './web-api.service';
import { Constants } from './../shared/constants';

@Injectable()
export class FavoritesService {
    constructor(private http: Http, private webApiService: WebApiService) { }

    getFavorites(): Observable<any> {
        return this.http.get(this.webApiService.getUrl(Constants.WEB_API_URL_PATH.FAVORITES))
            .map(response => response.json());
    }
}
