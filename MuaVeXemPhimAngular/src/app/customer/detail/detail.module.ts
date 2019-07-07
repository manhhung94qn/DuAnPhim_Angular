import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ShowtimeTableComponent } from './showtime-table/showtime-table.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [DetailComponent, ShowtimeTableComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule { }
