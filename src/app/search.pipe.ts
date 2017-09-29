import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(movies: any, movieName ? : any): any {

        if (movieName === undefined) {
            return movies;
        } else {

            return movies.filter(function(movie) {
                return movie.name.toLowerCase().includes(movieName.toLowerCase())
            })




        }
    }

}




