import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutAstronomicalObjectComponent } from './pages/about-astronomical-object/about-astronomical-object.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'aboutAstronomicalObject/:id', component: AboutAstronomicalObjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
