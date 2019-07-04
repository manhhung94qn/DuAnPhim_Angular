import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowtimesComponent } from './showtimes.component';

@NgModule({
  declarations: [ShowtimesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ShowtimesComponent
  ]
})
export class ShowtimesModule { }
