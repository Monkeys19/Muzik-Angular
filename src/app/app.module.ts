import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AlbumService} from './service/api.service'
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { MuzikComponent } from './muzik/muzik.component';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    MuzikComponent,
    HeaderComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatGridListModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
