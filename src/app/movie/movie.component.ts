import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { MovieDetails } from '../model/movie';
import { ConvertMinToHourPipe } from "../pipes/minutes-to-hour.pipe";
import { ConvertToDollarPipe } from '../pipes/dollar-converter.pipe';
@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.css',
    imports: [ConvertMinToHourPipe, ConvertToDollarPipe]
})
export class MovieComponent implements OnInit {
  movie_id: string = '';
  movie:MovieDetails={
    id: '',
    title: '',
    duration: '',
    budget: '',
    release_date: '',
    box_office: '',
    cinematographers: [],
    poster: '',
    producers: [],
    summary: ''
  } ;
  erroMessage: string='';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((movie_id) => {
      this.movie_id = movie_id['movieId'];
    });

    this.movieService.getMovieById(this.movie_id).subscribe((movie) => {
      this.movie=movie;
    },
    (err) => {
      this.erroMessage =  err.message;
    });
  }

  backToHome():void{
    this.router.navigate(['/movies']);
  }
}
