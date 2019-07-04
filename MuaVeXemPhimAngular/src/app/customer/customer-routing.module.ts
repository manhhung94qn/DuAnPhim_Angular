import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { ShowtimesComponent } from './showtimes/showtimes.component';

const customerRoutes: Routes = [
  {
    path: "", component: CustomerComponent,
    children: [
      {path: "", component: IndexComponent},
      {path: "deatail", component: DetailComponent},
      {path: "showtimes", component: ShowtimesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
