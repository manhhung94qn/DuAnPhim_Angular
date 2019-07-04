import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { IndexModule } from './index/index.module';
import { DetailModule } from './detail/detail.module';
import { ShowtimesModule } from './showtimes/showtimes.module';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HeaderModule,
    FooterModule,
    IndexModule,
    DetailModule,
    ShowtimesModule
  ]
})
export class CustomerModule { }
