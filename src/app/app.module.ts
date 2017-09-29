import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from "@angular/router";
import { AppRouting } from './app.routes';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import {MovieService} from './shared/services/movie.service';
import { SearchPipe } from './search.pipe';
import {MatTabsModule} from '@angular/material';
import { EventsComponent } from './events/events.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { UpcomingMovieDetailComponent } from './upcoming-movie-detail/upcoming-movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    SearchPipe,
    EventsComponent,
    UpcomingMoviesComponent,
    UpcomingMovieDetailComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpModule
   

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
