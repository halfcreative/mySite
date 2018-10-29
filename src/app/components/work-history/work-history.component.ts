import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { History } from 'src/app/models/History';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {

  private myhistory = Array<History>();

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getUserHistory(1).subscribe((data: Array<History>) => {
      this.myhistory = data;
    });
  }

}
