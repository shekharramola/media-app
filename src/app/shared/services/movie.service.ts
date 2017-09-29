import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  movies() {
        return this.http.get('assets/jsons/movies.json')
            .map((response => response.json()))
    }

   upcomingMovies(){
    	 return this.http.get('assets/jsons/upcoming-movies.json')
            .map((response => response.json()))
    }


}
