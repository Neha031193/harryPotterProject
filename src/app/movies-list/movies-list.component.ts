import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../model/movie';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchMoviePipe } from '../pipes/search.pipe';
import { ConvertMinToHourPipe } from '../pipes/minutes-to-hour.pipe';
import { ConvertToDollarPipe } from '../pipes/dollar-converter.pipe';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    FormsModule,
    SearchMoviePipe,
    ConvertMinToHourPipe,
    ConvertToDollarPipe,
  ],
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[] = [];
  movieTitle: string = '';
  releaseYear: number | undefined;

  constructor(private movieService: MovieService) {}

  getMoviesList() {
    this.movieService.getMoviesList().subscribe(
      (data) => {
        this.moviesList = data;
      });
  }

  ngOnInit(): void {
    this.getMoviesList();
  }
}
