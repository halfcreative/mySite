import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = (localStorage.getItem("currentUser"))? new BehaviorSubject<boolean>(true) :new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem("currentUser")));


  constructor(private http: HttpClient) { }

  login(account:Account){
    console.log("Account = "+ account);
    return this.http.post<any>('/Blackjack/checkAuthentication',account).pipe(map(user=> {
      if(user){
        this.loggedIn.next(true);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser.next(user);
      } 
      console.log(user);
      return user;
    }));
  }
}
