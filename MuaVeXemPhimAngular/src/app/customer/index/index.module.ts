import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { SlideModule } from './slide/slide.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SlideModule,
    ContentModule
  ],
  exports: [
    IndexComponent
  ],
  providers: [
    
  ]
})
export class IndexModule { }
