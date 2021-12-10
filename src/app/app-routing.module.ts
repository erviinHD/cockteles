import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktelComponent } from './pages/cocktel/cocktel.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  }, {
    path: 'cocktel/:id', component: CocktelComponent
  }
  , {
    path: 'Not', component: NotFoundComponent
  }
  , {
    path: '**', redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
