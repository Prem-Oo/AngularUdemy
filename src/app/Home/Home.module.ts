import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './Home.home';
import { HomeRoutingModule } from './Home.routing';
import  { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,HomeRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
