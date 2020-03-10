import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent implements OnInit {
  mensaje : string;

  @Input() catalogChild;
  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onPropagar(message) {
    this.propagar.emit(message);
  }


}
