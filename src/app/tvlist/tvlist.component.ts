import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvlist',
  templateUrl: './tvlist.component.html',
  styleUrls: ['./tvlist.component.css']
})
export class TvlistComponent implements OnInit {
   tvshows:any[]=[]
  constructor(private tvservice:MoviesService) { }

  ngOnInit(): void {
   this.tvservice.getTVShows().subscribe({next:(tvs)=>{
     this.tvshows=tvs.results;
     
   }})
  }

}
