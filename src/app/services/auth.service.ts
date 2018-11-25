import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
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

  private devMode:boolean = false;
  private loggedIn = (localStorage.getItem("currentUser")) ? new BehaviorSubject<boolean>(true) : new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));


  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { }


  getDevmodeStatus(){
    return this.devMode;
  }
  activateDevMode(){
    this.devMode = !this.devMode;
  }
  /**
   * Login2 - the second login function I made
   * 
   * @param credentials - the credentials used to login
   * @param remember - a boolean of if we want to remember the user
   */
  login2(credentials: Creds, remember = false) {
    return this.http.post<Users>(API_URL + '/login', credentials, httpOptions).pipe(map(user => {
      if (user.name) {
        this.loggedIn.next(true);
        this.currentUser.next(user);
        if(remember){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      } 
      return user;
    }));
  }

  /**
   * logout
   */
  logout(){
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
    this.currentUser.next(null);
  }
}
