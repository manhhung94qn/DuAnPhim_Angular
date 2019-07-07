import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-film',
  templateUrl: './item-film.component.html',
  styleUrls: ['./item-film.component.scss']
})
export class ItemFilmComponent implements OnInit {

  constructor() { }

  @Input("Film") Film;
  ngOnInit() {
  }

}
