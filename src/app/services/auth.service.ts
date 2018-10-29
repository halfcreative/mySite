import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Creds } from '../models/Creds';
import { Users } from '../models/Users';
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
export class AuthService {

  private loggedIn = (localStorage.getItem("currentUser")) ? new BehaviorSubject<boolean>(true) : new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));


  constructor(private http: HttpClient) { }

  login(account: Account) {
    console.log("Account = " + account);
    return this.http.post<any>('/Blackjack/checkAuthentication', account).pipe(map(user => {
      if (user) {
        this.loggedIn.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser.next(user);
      }
      console.log(user);
      return user;
    }));
  }
  login2(credentials: Creds) {
    return this.http.post<Users>(API_URL + '/login', credentials, httpOptions).pipe(map(user => {
      if (user.name != '') {
        console.log('you are =' + user.name);
      } 
      return user;
    }));
  }
}
