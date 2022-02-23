import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticesComponent } from './categories/politices/politices.component';
import { TopHeadingComponent } from './components/top-heading/top-heading.component';
import { BusinessComponent } from './categories/business/business.component';
import { SportsComponent } from './categories/sports/sports.component';
import { EntertainmentComponent } from './categories/entertainment/entertainment.component';
import { HealthComponent } from './categories/health/health.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { ScienceComponent } from './categories/science/science.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';

const routes: Routes = [
  { path: '', component: TopHeadingComponent },
  { path: 'politices', component: PoliticesComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'health', component: HealthComponent },
  { path: 'tech', component: TechnologyComponent },
  { path: 'science', component: ScienceComponent },

  { path: '**', component: PageNotFoundComponent },
];

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'rgba(12,80,219,0.98)',
  bgsOpacity: 1,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 40,
  bgsType: SPINNER.threeStrings,
  fgsColor: 'rgba(12,80,219,0.98)',
  fgsPosition: POSITION.centerCenter
};

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
