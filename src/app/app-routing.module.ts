import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./components/user-list/user-list-routing.module').then(m => m.UserListRoutingModule) },
  { path: 'user/:id', loadChildren: () => import('./components/user-details/user-details.module').then(m => m.UserDetailsModule)},
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
