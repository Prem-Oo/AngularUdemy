import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// const routes: Routes = [
//   {path:'Home',component:HomeComponent},
//   {path:'Customer', component:CustomerComponent},
//   { path: '**', redirectTo: '/' } // 
// ];

// lazyloding  (old style:: {path:'Customer', loadChildren:'./Customer/Customer.module#CustomerModule'},)
const routes: Routes = [
  {path:'Home', loadChildren: () => import('./Home/Home.module').then(m => m.HomeModule)},
  {path:'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule)},
  { path: '**', redirectTo: '/' } // 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
