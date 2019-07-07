import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { DataService } from 'src/app/_Core/Services/data.service';
import { ItemFilmComponent } from './item-film/item-film.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [ContentComponent, ItemFilmComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ContentComponent
  ],
  providers: [
    DataService
  ]
})
export class ContentModule { }
