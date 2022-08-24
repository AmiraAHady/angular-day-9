import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TvlistComponent } from './tvlist/tvlist.component';

const routes: Routes = [
  {path:'movies',component:MovieslistComponent},
  {path:'tvs',component:TvlistComponent},
  {path:'movies/:id',component:MovieDetailsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
