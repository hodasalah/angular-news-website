import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { NewsApiService } from './services/news-api.service';
import { FooterComponent } from './ui/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PoliticesComponent } from './categories/politices/politices.component';
import { BusinessComponent } from './categories/business/business.component';
import { SportsComponent } from './categories/sports/sports.component';
@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    NavbarComponent,
    FooterComponent,
    PoliticesComponent,
    BusinessComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
