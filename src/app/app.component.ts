import { Component,Input, Output,OnInit, EventEmitter,ViewChild  } from '@angular/core';
import { AlbumComponent } from './album/album.component';
import { CatalogComponent } from './catalog/catalog.component'
import { AlbumService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './album/album.component.css', './catalog/catalog.component.css', './muzik/muzik.component.css', './header/header.component.css']
})

export class AppComponent implements OnInit{
  //array que contiene todo ("enviada a hijo album")
  albums= [];

  //array utilizada para filtrar las categorias
  uniqueArray= [];

  //array con los resultados final de las categorias (enviada a hijo "catalog")
  uniqueItems= [];

  //array que contiene los datos filtrados que nos entrego el evento de "catalog"
  datosFiltrados = [];
  constructor(private _api: AlbumService ) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum() {
    this._api.getAlbum().subscribe((data: any) => {
      this.albums = data.feed.entry;
      for (let album of this.albums) {
        this.uniqueArray.push(album.category.attributes.label);

      }
      console.log(this.uniqueArray)
    this.uniqueItems = this.uniqueArray.filter((elem, i, arr) => {
      if (arr.indexOf(elem) === i) {
        return elem
      }
    })
    })
  }

  procesaPropagar(mensaje) {
    for(let album of this.albums){
      this.datosFiltrados = this.albums.filter(album => album.category.attributes.label == mensaje);
    }
    this.albums = this.datosFiltrados;
  console.log(mensaje);
}


}
