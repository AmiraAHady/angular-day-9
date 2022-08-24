import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  getAllMovies(pageNumber=1):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=${pageNumber}`)
  }
  getSearchMovies(searchVal:string):Observable<any>{
    if(searchVal==''){
      return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1`)
    }else{
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1&query=${searchVal}`)
    }
  }
  getTVShows():Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US&page=1`)
  }

  getMovieById(movieId:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=38e52bad77ebe70a2fa84bd0e6051118&language=en-US`)
  }
}
