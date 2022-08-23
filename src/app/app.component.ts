import { Component } from '@angular/core';
import { IMovie } from './movieslist/movie';

@Component({
  selector: 'app-root',//Directive
  templateUrl: './app.component.html',
  // template:`<div> 
  //   <h1>Welcome to MEAN Stack App</h1>
  //   <p>this app from Demo course</p>
  // </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Mean App';
//   firstName:string='Hossam'; 
 
 
}

 
