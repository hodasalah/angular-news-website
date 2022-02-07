import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticesComponent } from './categories/politices/politices.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { BusinessComponent } from './categories/business/business.component';
import { SportsComponent } from './categories/sports/sports.component';

const routes: Routes = [{ path: 'categories/politices', component: PoliticesComponent }, { path: 'categories/business', component: BusinessComponent },
{ path: 'categories/sports', component: SportsComponent },
{ path: '', component: TopHeadingComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
