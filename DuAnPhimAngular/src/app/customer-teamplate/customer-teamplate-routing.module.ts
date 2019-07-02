import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerTeamplateComponent } from './customer-teamplate.component';
import { HomeComponent } from './home/home.component';
import { ShowTimesComponent } from './show-times/show-times.component';
import { CinemaComponent } from './cinema/cinema.component';

const routes: Routes = [
    {
        path: "", 
        component: CustomerTeamplateComponent,
        children: [
            {path: "", component: HomeComponent},
            {path: "showtimes", component: ShowTimesComponent},
            {path: "cinema", component: CinemaComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CusstomerTemplateRoutingModule { }
