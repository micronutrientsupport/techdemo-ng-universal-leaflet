import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Seo1Component } from './components/seo/seo1/seo1.component';
import { Seo2Component } from './components/seo/seo2/seo2.component';


const routes: Routes = [
  {
    path: 'seo1',
    component: Seo1Component,
  }, {
    path: 'seo2',
    component: Seo2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
