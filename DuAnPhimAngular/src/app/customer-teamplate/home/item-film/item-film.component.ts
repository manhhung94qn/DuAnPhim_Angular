import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-film',
  templateUrl: './item-film.component.html',
  styleUrls: ['./item-film.component.scss']
})
export class ItemFilmComponent implements OnInit {

  constructor() { }
  @Input("film") film;
  ngOnInit() {
  }
  divHover: boolean = true;
  getHover(e){
    console.log(e.type);
    console.log(e)
    if(e.type == "mouseover"){
      this.divHover = false;
    }
    else {      
      this.divHover = false;
    }
  }

}
