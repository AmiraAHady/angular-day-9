import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from '../movies.service';
import { IMovie } from './movie';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit { 
  isDiabled:boolean =true 
  childmsg:string='';
  pageSize:number=20
  length:number=696880;
  currentPage:number=1
 private _searchValue:string='' 
 moviesData:any[]=[]
 filteredMovies:any[]=this.moviesData; 

  constructor(private movsService:MoviesService){}//dependency injection
  ngOnInit(){
     this.movsService.getAllMovies().subscribe({next:(movies)=>{
       console.log(movies);
       this.moviesData=movies.results,
       this.filteredMovies=movies.results;
       
     }})
    this.filteredMovies=this.moviesData;
    
  }


  get searchValue():string{
   return this._searchValue;
  }

  set searchValue(value:string){ 
    this._searchValue=value;
    console.log(value);
    
    this.performSearch(value)

  }
    printtoconsole():void{
      console.log('button Pressed')
    }
  
    toggleDate(movieId:number):void{
      this.moviesData.filter(function(movie){
        if(movie.id==movieId){
          movie.isVisiable=!movie.isVisiable;
        }
      })
      // this.singleMovie.isVisiable=!this.singleMovie.isVisiable;
    }

    performSearch(val:string){
      this.movsService.getSearchMovies(val).subscribe({next:(data)=>{
        this.filteredMovies=data.results;
      }})

    }

    handelChidEvent(data:string){
     this.childmsg=data;
      
    }

    onPageChange(pageData:PageEvent){
    this.currentPage=pageData.pageIndex+1;
    this.movsService.getAllMovies(this.currentPage).subscribe({next:(movies)=>{
      console.log(movies);
      this.moviesData=movies.results,
      this.filteredMovies=movies.results;
      
    }})
     
    }

}
