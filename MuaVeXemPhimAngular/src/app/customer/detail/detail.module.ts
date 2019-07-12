import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ShowtimeTableComponent,  } from './showtime-table/showtime-table.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { InforDetailComponent } from './infor-detail/infor-detail.component';

@NgModule({
  declarations: [DetailComponent, ShowtimeTableComponent, InforDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    
  ],
  exports: [
    DetailComponent
  ]
})
export class DetailModule { }
