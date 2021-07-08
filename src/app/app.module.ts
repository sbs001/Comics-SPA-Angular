import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { HerosService } from './services/heros.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HerosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
