import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminTeamplateModule } from './admin-teamplate/admin-teamplate.module';
import { CustomerTeamplateModule } from './customer-teamplate/customer-teamplate.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminTeamplateModule,
    CustomerTeamplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
