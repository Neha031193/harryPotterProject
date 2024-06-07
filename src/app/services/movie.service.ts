import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieDetails } from '../model/movie';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>('/movies')
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  getMovieById(movieId: string): Observable<MovieDetails> {
    return this.http
      .get<MovieDetails>('/movies/' + movieId)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  errorHandler(error: Error) {
    return throwError(error);
  }
}
