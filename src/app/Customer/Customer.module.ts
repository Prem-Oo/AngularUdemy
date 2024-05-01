import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './Customer.customer';
import { CustomerRoutingModule } from './Customer.routing';
import  { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,CustomerRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
