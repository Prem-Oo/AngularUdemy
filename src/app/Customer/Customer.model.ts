import { NgForm,FormGroup,FormControl,Validator,FormBuilder, Validators } from "@angular/forms";
export class Customer{
    CustomerId:string="";
    CustomerName:string ="";
    CustomerNumber:number=0;
    formCustomerGroup : FormGroup
    
    constructor(){
        this.formCustomerGroup=new FormBuilder().group({});
        // name control (1control-1validation)
        this.formCustomerGroup.addControl("NameControl",new FormControl('',Validators.required));
        // ID control (required + 3 length)
         var validations=[];
         validations.push(Validators.required);
         validations.push(Validators.pattern("^[0-9]{3,3}$"))

         this.formCustomerGroup.addControl("IdControl",new FormControl('',Validators.compose(validations)));
    }
}