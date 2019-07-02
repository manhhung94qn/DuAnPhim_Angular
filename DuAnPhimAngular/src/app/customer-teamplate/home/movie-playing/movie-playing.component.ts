import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmsService } from 'src/app/_Core/Service/films.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-playing',
  templateUrl: './movie-playing.component.html',
  styleUrls: ['./movie-playing.component.scss']
})
export class MoviePlayingComponent implements OnInit, OnDestroy {

  constructor(private _FilmsService: FilmsService) { }

  ngOnInit() {
    this.subrice = this._FilmsService.getAllFilms().subscribe((data: any)=>{
      console.log(data);
      this.listFilms = data;
    }, error=>{
      console.log(error)
    });
  }

  ngOnDestroy(){
    this.subrice.unsubscribe();//de huy di cho project nhe hon
  }

  subrice: Subscription;
  listFilms: any[] = [];

}
