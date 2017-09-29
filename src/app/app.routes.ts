
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    data: { title: 'Movies List' }
  },
  {
    path: 'movies/:id/details',
    component: DetailsComponent,
    data: { title: 'Movies Detail' }
  },
  { path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];

export const AppRouting:ModuleWithProviders = RouterModule.forRoot(routes);