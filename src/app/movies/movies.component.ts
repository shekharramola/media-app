import { Component, OnInit } from '@angular/core';
import {MovieService} from '../shared/services/movie.service';
import {SearchPipe} from '../search.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    movies;
    movieName;


    constructor(public _service: MovieService, private _router: Router) {
        this.getMovies();


    }

    getMovies() {

        this._service.movies()
            .subscribe(
                data => {
                    this.movies = data;
                    this.movies = data.map(function (item) {
                        item.genres = item.genres.join('|');
                        return item;
                    });

                },
                error => {
                     alert('error')
                }
            );
    }

    ngOnInit() {

    }


    detail(movieId) {
        this._router.navigate(['./movies/' + movieId + '/details']);
    }

}