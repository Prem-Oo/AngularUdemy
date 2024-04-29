import { Component } from '@angular/core';

import {Customer} from './Customer.model';
@Component({
  templateUrl:'./Customer.customer.html',
  styleUrls:['./Customer.customer.css']
})
export class CustomerComponent {
 title: string="Customer";

 CustomerModel: Customer=new Customer();
CustomerModels: Array<Customer>=new Array<Customer>();
    Add(){
      this.CustomerModels.push(this.CustomerModel);
      this.CustomerModel=new Customer();
    }
}
