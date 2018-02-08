import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { TestabilityRegistry } from '@angular/core/src/testability/testability';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from '../../services/favorites.service';
import { Favorites } from '../../models/data-models/favorites.model';
import { List } from '../../models/data-models/list.model';
import { EntryItem } from '../../models/data-models/entry-item.model';
import { Entry } from '../../models/data-models/entry.model';
import { FvsTarget } from '../../models/data-models/target.model';
import { FvsFile } from '../../models/data-models/file.model';
import { FvsFolder } from '../../models/data-models/folder.model';

describe('FavoritesComponent', () => {
    let fixture, component: any;
    const favoriteService = jasmine.createSpyObj('favoriteService', ['getFavorites']);
    favoriteService.getFavorites.and.callFake(() => Observable.of(null));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FavoritesComponent
            ],
            imports: [
                FormsModule,
                MatCardModule,
                MatCheckboxModule,
                MatIconModule
            ],
            providers: [
                {
                    provide: FavoritesService,
                    useValue: favoriteService
                }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(FavoritesComponent);
            component = fixture.debugElement.componentInstance;
        });
    }));

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should display specific text when is loading', (() => {
        const loadItems$ = new Observable().map(() => {
            const compiled = fixture.debugElement.nativeElement;

            expect(compiled.querySelector('p').textContent).toContain('Loading...');
        });

        favoriteService.getFavorites.and.callFake(() => loadItems$);
    }));

    it('should show error message', fakeAsync(() => {
        favoriteService.getFavorites.and.callFake(() => Observable.throw('error'));
        component.isError = true;

        tick();
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('.description-area p').textContent).toContain('A network error occured');
    }));

    it('should display specific text when is loaded and there are no elements', (() => {
        favoriteService.getFavorites.and.callFake(() => Observable.of(null));

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('.description-area p').textContent).toContain('There are no favorite items');
    }));

    it('should display specific text when is loaded and there are elements but none with title', (() => {
        const favoriteItemsWithNamesOnly = new Favorites(new List(
            {
                entries: [
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withName('file1.jpg')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withName('file2.jpg')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFolder().withName('folder1')
                        })
                    }))
                ]
            }));

        favoriteService.getFavorites.and.callFake(() => Observable.of(favoriteItemsWithNamesOnly));

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('.description-area p').textContent)
            .toContain('There are favorite cards for this user, but they do not have a title specified');
    }));

    it('should display specific text when is loaded and there are elements and some with title', (() => {
        const favoriteItemsWithTitlesAndNames = new Favorites(new List(
            {
                entries: [
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withName('file1.jpg')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withTitle('file2')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFolder().withName('folder1')
                        })
                    }))
                ]
            }));

        favoriteService.getFavorites.and.callFake(() => Observable.of(favoriteItemsWithTitlesAndNames));

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('.description-area p').textContent)
            .toContain('Here are the user\'s favorite files and folders');
    }));

    it('should contain cards with titles', fakeAsync(() => {
        const favoriteItemsWithTitlesAndNames = new Favorites(new List(
            {
                entries: [
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withName('file1.jpg')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withTitle('file2')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFolder().withName('folder1')
                        })
                    }))
                ]
            }));

        favoriteService.getFavorites.and.callFake(() => Observable.of(favoriteItemsWithTitlesAndNames));

        tick();
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelectorAll('mat-card').length).toBe(1);
    }));

    it('should contain cards with names', (() => {
        const favoriteItemsWithTitlesAndNames = new Favorites(new List(
            {
                entries: [
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withName('file1.jpg')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withTitle('file2')
                        })
                    })),
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            folder: new FvsFolder().withName('folder1')
                        })
                    }))
                ]
            }));

        favoriteService.getFavorites.and.callFake(() => Observable.of(favoriteItemsWithTitlesAndNames));

        fixture.detectChanges();
        component.displayNameWhenNoTitle = true;
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelectorAll('mat-card').length).toBe(3);
    }));

    it('should display file icon', (() => {
        const favoriteItemsWithTitlesAndNames = new Favorites(new List(
            {
                entries: [
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            file: new FvsFile().withTitle('file1')
                        })
                    }))
                ]
            }));

        favoriteService.getFavorites.and.callFake(() => Observable.of(favoriteItemsWithTitlesAndNames));

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('.icon-title').textContent).toContain('insert_drive_file');
    }));

    it('should display folder icon', (() => {
        const favoriteItemsWithTitlesAndNames = new Favorites(new List(
            {
                entries: [
                    new EntryItem(new Entry({
                        target: new FvsTarget({
                            folder: new FvsFolder().withTitle('folder')
                        })
                    }))
                ]
            }));

        favoriteService.getFavorites.and.callFake(() => Observable.of(favoriteItemsWithTitlesAndNames));

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        expect(compiled.querySelector('.icon-title').textContent).toContain('folder');
    }));
});
