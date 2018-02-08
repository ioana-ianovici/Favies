import { TestBed, async } from '@angular/core/testing';

import { WebApiService } from './web-api.service';
import { Constants } from '../shared/constants';

describe('WebApiService', () => {
    let webApiService: any;
    const urlSuffix = 'suffix';

    beforeEach(async(() => {
        webApiService = new WebApiService();
    }));

    it('should create the service', () => {
        expect(webApiService).toBeTruthy();
    });

    it('getUrl() should return concatinated value with config url', () => {
        expect(webApiService.getUrl(urlSuffix)).toBe(Constants.WEB_API_URL + 'suffix');
    });
});
