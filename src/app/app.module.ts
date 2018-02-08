import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesService } from './services/favorites.service';
import { WebApiService } from './services/web-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    WebApiService,
    FavoritesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
