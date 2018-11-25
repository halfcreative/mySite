import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Projects } from 'src/app/models/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects = Array<Projects>();
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUserProjects(1).subscribe((data: Array<Projects>) => {
      this.projects = data;
    });
  }


}
