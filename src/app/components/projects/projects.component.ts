import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Projects } from 'src/app/models/Projects';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public newProjectForm: boolean;
  public projects = Array<Projects>();
  public loggedIn: Observable<boolean>;
  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.getUserProjects(1).subscribe((data: Array<Projects>) => {
      this.projects = data;
      this.onProjectsLoaded();
    }, error =>{
      // Need better error handling -- display page load error or redirect back to home
      console.log(error);
    });
  }

  public onProjectsLoaded(){
    this.newProjectForm = false;
    this.loggedIn = this.authService.isLoggedIn;
  }

  public newProjectButton(){
    this.newProjectForm = true;
  }


}
