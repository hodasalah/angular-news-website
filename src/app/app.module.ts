import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './components/top-heading/top-heading.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NewsApiService } from './services/news-api.service';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PoliticesComponent } from './categories/politices/politices.component';
import { BusinessComponent } from './categories/business/business.component';
import { SportsComponent } from './categories/sports/sports.component';
import { EntertainmentComponent } from './categories/entertainment/entertainment.component';
import { HealthComponent } from './categories/health/health.component';
import { ScienceComponent } from './categories/science/science.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { CardComponent } from './ui/card/card.component';
import { HtmlToPlainTextPipe } from './common/html-to-plain-text.pipe';
import { PageNotFoundComponent } from './pageNotFound.component';
import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from 'ngx-ui-loader';






@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    NavbarComponent,
    FooterComponent,
    PoliticesComponent,
    BusinessComponent,
    SportsComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    TechnologyComponent,
    CardComponent,
    HtmlToPlainTextPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
