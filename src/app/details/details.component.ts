import {Component,OnInit} from '@angular/core';
//import {DataService} from '../data.service';
import {MovieService} from '../shared/services/movie.service';
import {RouterModule,Routes} from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    movieId;
    movies;
    movieDetails;
    userReviews: any = [];
    cast: any[];

    constructor(public _service: MovieService, private route: ActivatedRoute) {
        this.route.params
            .subscribe(params => {
                this.movieId = params
                if (this.movieId.id < 7) {
                    this.getMovies();
                }


            });


    }

    getMovies() {
        this._service.movies()
            .subscribe(
                data => {
                    var array = []
                    this.movies = data;
                    this.movies = data.map(function (item) {
                        item.genres = item.genres.join('|');
                        return item;
                    });
                    for (var i = 0; i < this.movies.length; i++) {
                        if (this.movies[i].id == this.movieId.id) {
                            this.movieDetails = this.movies[i]


                        }
                    }

                    this.userReviews = this.movieDetails['userReviews'];
                    this.cast = this.movieDetails['cast']


                },
                error => {
                    alert('error')
                }
            );
    }


    ngOnInit() {}

}