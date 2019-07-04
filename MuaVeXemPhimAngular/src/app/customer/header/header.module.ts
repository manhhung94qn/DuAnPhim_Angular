import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [HeaderComponent, MenuHeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
