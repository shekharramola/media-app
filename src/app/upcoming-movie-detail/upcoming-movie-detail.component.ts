import { Component, OnInit } from '@angular/core';
import {MovieService} from '../shared/services/movie.service';
import { RouterModule, Routes } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-upcoming-movie-detail',
  templateUrl: './upcoming-movie-detail.component.html',
  styleUrls: ['./upcoming-movie-detail.component.css']
})
export class UpcomingMovieDetailComponent implements OnInit {


  movieId;
  upcomingMovies: any[];
  cast: any[];
  constructor(public _service: MovieService, private route: ActivatedRoute) {
    this.route.params
      .subscribe(params => {
        this.movieId = params
        if (this.movieId.id > 6) {
          this.upcomingMoviesDetail();
        }


      });
  }

  upcomingMoviesDetail() {
    this._service.upcomingMovies()
      .subscribe(
        data => {
          var array = []
          this.upcomingMovies = data;

          for (var i = 0; i < this.upcomingMovies.length; i++) {
            if (this.upcomingMovies[i].id == this.movieId.id) {
              this.upcomingMovies = this.upcomingMovies[i]


            }
          }
          this.cast = this.upcomingMovies['cast']
          
        },
        error => {
          alert('error')
        }
      );
  }

  ngOnInit() {}

}