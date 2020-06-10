import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent },
  { path: 'form'    , component: FormComponent },
  { path: 'info'    , component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
