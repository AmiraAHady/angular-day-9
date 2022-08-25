import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent implements OnInit {
  constructor(private movServise: MoviesService) {}

  ngOnInit(): void {}

  addMovie(formData: NgForm) {
    if (formData.invalid) {
      console.log('you must add value');
      return;
    }
    this.movServise.addNewMovie(
      formData.value.movieTitle,
      formData.value.moviePath,
      formData.value.movieoverView
    );
    formData.resetForm();
  }
}
