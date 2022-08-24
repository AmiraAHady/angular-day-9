import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  singleMovie:any;
  constructor(private moviesServ:MoviesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=Number(this.route.snapshot.paramMap.get('id'));
    this.moviesServ.getMovieById(id).subscribe({next:(movie)=>{
      this.singleMovie=movie;
    }})
  }

}
