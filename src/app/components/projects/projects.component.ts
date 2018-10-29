import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  private projects = [];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getUserProjects(1).subscribe((data: Array<any>)=> {
      this.projects = data;
      console.log(this.projects);
    }
    );
  }


}
