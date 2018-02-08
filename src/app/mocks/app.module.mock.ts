import { NgModule } from '@angular/core';

import { AppModule } from '../app.module';
import { FavoritesComponentMock } from './favorites.component.mock';

@NgModule({
  declarations: [
      FavoritesComponentMock
  ],
  imports: [
    AppModule
  ]
})
export class AppModuleMock { }
