import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_Core/Services/data.service';
import { Film } from 'src/app/_Core/Models/Film.class';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private FimlService: DataService) { }

  ngOnInit() {
    this.getListFilm()
  }

  listFilm = [];
  
  getListFilm(){
    this.FimlService.get( this.FimlService.getLinkFilm() ).subscribe((data: Film[])=>{
      this.listFilm = data;
      console.log(this.listFilm);
    })
  }
  
}
