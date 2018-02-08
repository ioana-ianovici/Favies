import { Injectable } from '@angular/core';

import { Constants } from '../shared/constants';

@Injectable()
export class WebApiService {
    getUrl(url: string): string {
        return Constants.WEB_API_URL.concat(url);
    }
}
