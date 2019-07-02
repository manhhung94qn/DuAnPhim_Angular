import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTeamplateComponent } from './admin-teamplate/admin-teamplate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "",  loadChildren: './customer-teamplate/customer-teamplate.module#CustomerTeamplateModule'},
  {path: "admin", component: AdminTeamplateComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
