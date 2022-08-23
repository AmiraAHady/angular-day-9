import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieratingComponent } from './movierating/movierating.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieslistComponent,
    MovieratingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
