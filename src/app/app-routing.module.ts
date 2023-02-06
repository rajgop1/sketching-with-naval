import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArtComponent } from './create-art/create-art.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-art', component: CreateArtComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
