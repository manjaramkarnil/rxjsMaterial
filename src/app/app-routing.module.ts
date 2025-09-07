import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { AboutComponent } from './shared/component/about/about.component';
import { CardComponent } from './shared/component/card/card.component';
import { FormComponent } from './shared/component/form/form.component';

const routes: Routes = [
  {path : '' , component : DashboardComponent},

  {path : 'about',component : AboutComponent},
   {path : 'card/:id', component : CardComponent},
     {path : 'add',component : FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
