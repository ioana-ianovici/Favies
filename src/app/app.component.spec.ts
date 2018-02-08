import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Component } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoritesComponentMock } from './mocks/favorites.component.mock';
import { Constants } from './shared/constants';

describe('AppComponent', () => {
    let fixture, component: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                FavoritesComponentMock
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.debugElement.componentInstance;
        });
    }));

    it('should create the app', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('h1').textContent).toContain('Favies');
    }));

    it('should load FavoritesComponentMock', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.textContent).toContain('favorites');
    }));
});


