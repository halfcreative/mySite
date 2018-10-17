import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/**
 * The Views of the site:
 * -Home
 * -Projects
 * -Contact
 */
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: { animation: 'HomePage' }},
  {path: 'projects', component: ProjectsComponent, data: { animation: 'ProjectsPage' }},
  {path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
