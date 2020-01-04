import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {HomeComponent} from './pages/home/home.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {MovieComponent} from './pages/movie/movie.component';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'list-of-movies',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
