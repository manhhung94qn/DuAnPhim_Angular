import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerTeamplateComponent } from './customer-teamplate.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CusstomerTemplateRoutingModule } from './customer-teamplate-routing.module';
import { ShowTimesComponent } from './show-times/show-times.component';
import { CinemaComponent } from './cinema/cinema.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderSlideComponent } from './header/header-slide/header-slide.component';

@NgModule({
  declarations: [CustomerTeamplateComponent, HeaderComponent, FooterComponent, HomeComponent, ShowTimesComponent, CinemaComponent, HeaderMenuComponent, HeaderSlideComponent],
  imports: [
    CommonModule,
    CusstomerTemplateRoutingModule
  ]
})
export class CustomerTeamplateModule { }
