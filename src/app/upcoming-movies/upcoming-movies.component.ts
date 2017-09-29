import { Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../shared/services/movie.service';
import {SearchPipe} from '../search.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  @Input() movieName: string;
  upcomingMovies;
  constructor(public _service: MovieService, private _router: Router) {
    this.upcomingMoviesList();

  }

  upcomingMoviesList() {
    this._service.upcomingMovies()
      .subscribe(
        data => {
          this.upcomingMovies = data;
          this.upcomingMovies = data.map(function (item) {
            item.genres = item.genres.join('|');
            return item;
          });

        },
        error => {
          alert('error')
        }
      );
  }

  ngOnInit() {}

  detail(movieId) {
    
    this._router.navigate(['./movies/' + movieId + '/details']);
  }

}