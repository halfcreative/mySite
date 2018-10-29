import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL: String = environment.apiBaseUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  constructor(private httpClient: HttpClient) { }

  getUserProjects(userId: number) {
    return this.httpClient.get(API_URL + '/projects/' + userId,httpOptions);
  }

}
