import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_Core/Modules/material/material.module';

import { CustomerTeamplateComponent } from './customer-teamplate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CusstomerTemplateRoutingModule } from './customer-teamplate-routing.module';
import { ShowTimesComponent } from './show-times/show-times.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { MenuSlideComponent } from './home/menu-slide/menu-slide.component';
import { ItemFilmComponent } from './home/item-film/item-film.component';
import { MoviePlayingComponent } from './home/movie-playing/movie-playing.component';

@NgModule({
  declarations: [
    CustomerTeamplateComponent, 
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    ShowTimesComponent, 
    CinemaComponent, 
    HeaderMenuComponent, MenuSlideComponent, ItemFilmComponent, MoviePlayingComponent],
    
  imports: [
    CommonModule,
    CusstomerTemplateRoutingModule,
    MaterialModule
  ]
})
export class CustomerTeamplateModule { }
