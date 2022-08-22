import { Component } from '@angular/core';

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
  firstName:string='Hossam';
 isDiabled:boolean =true 
//  singleMovie:any={
//   "adult":false,
//  "backdrop_path":"/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
//  "genre_ids":[
//     28,
//     878,
//     27
//  ],
//  "id":766507,
//  "original_language":"en",
//  "original_title":"Prey",
//  "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
//  "popularity":9839.591,
//  "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
//  "release_date":"2022-08-02",
//  "title":"Prey",
//  "video":false,
//  "vote_average":8.1,
//  "vote_count":2894,
//  isVisiable:false,
// }
 moviesData:any[]=[
  {
    "adult":false,
    "backdrop_path":"/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg",
    "genre_ids":[
       28,
       878,
       27
    ],
    "id":766507,
    "original_language":"en",
    "original_title":"Prey",
    "overview":"When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
    "popularity":9839.591,
    "poster_path":"/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
    "release_date":"2022-08-02",
    "title":"Prey",
    "video":false,
    "vote_average":8.1,
    "vote_count":2894,
    isVisiable:false
 },
 {
    "adult":false,
    "backdrop_path":"/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
    "genre_ids":[
       16,
       878,
       28
    ],
    "id":610150,
    "original_language":"ja",
    "original_title":"ドラゴンボール超：スーパーヒーロー",
    "overview":"The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
    "popularity":8660.942,
    "poster_path":"/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg",
    "release_date":"2022-06-11",
    "title":"Dragon Ball Super: Super Hero",
    "video":false,
    "vote_average":7.5,
    "vote_count":119, 
    isVisiable:false
 },
 {
    "adult":false,
    "backdrop_path":"/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
    "genre_ids":[
       28,
       12,
       14
    ],
    "id":616037,
    "original_language":"en",
    "original_title":"Thor: Love and Thunder",
    "overview":"After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Relatively Mighty Girl Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    "popularity":7686.423,
    "poster_path":"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "release_date":"2022-07-06",
    "title":"Thor: Love and Thunder",
    "video":false,
    "vote_average":6.8,
    "vote_count":1970,
    isVisiable:false
 },
 {
    "adult":false,
    "backdrop_path":"/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg",
    "genre_ids":[
       12,
       28,
       878
    ],
    "id":507086,
    "original_language":"en",
    "original_title":"Jurassic World Dominion",
    "overview":"Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    "popularity":4973.973,
    "poster_path":"/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    "release_date":"2022-06-01",
    "title":"Jurassic World Dominion",
    "video":false,
    "vote_average":7.1,
    "vote_count":2931,
    isVisiable:false
 },
 {
    "adult":false,
    "backdrop_path":"/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    "genre_ids":[
       16,
       12,
       35,
       14
    ],
    "id":438148,
    "original_language":"en",
    "original_title":"Minions: The Rise of Gru",
    "overview":"A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    "popularity":4558.565,
    "poster_path":"/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    "release_date":"2022-06-29",
    "title":"Minions: The Rise of Gru",
    "video":false,
    "vote_average":7.8,
    "vote_count":1520,
    isVisiable:false
 },
 ]

  printtoconsole():void{
    console.log('button Pressed')
  }

  toggleDate(movieId:string):void{
    this.moviesData.filter(function(movie){
      if(movie.id==movieId){
        movie.isVisiable=!movie.isVisiable;
      }
    })
    // this.singleMovie.isVisiable=!this.singleMovie.isVisiable;
  }
}

 
