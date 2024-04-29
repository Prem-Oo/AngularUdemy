import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './Customer.customer';
import { CustomerRoutingModule } from './Customer.routing';
import  { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,CustomerRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
