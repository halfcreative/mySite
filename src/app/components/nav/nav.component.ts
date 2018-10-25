import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  public isCollapsed: boolean;
  
  // Array of quotes for each page. Take an observable of the quote selected and display it on navbar on page change
  quotes: String[][] =
    [
      ['Hello World.', 'Welcome to my site!', 'Sam\'s portfolio.'], // Quotes for Home
      ['My project showcase.', 'Some of my best works.', 'Showing you what I\'ve got.'], // Quotes for Projects
      ['See where I\'ve been!', 'My work history.'], // Quotes for Work History
      ['Get in touch with me!', 'Here\'s my number, call me maybe.', 'Feel free to contact me.',
       'Send something nice!', 'No spam please!'],  // Quotes for Contact
      ['WHAT IS YOUR NAME?']
    ];
  pageQuote: Observable<String>;
  
  devModeOn:boolean = false;
  clickCount:number = 0;

  constructor(private router: Router, private alertService: AlertService) {
    // Sets a random quote associated with the page to the navigation bar text field
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/home':
            this.pageQuote = of(this.quotes[0][Math.floor(Math.random() * this.quotes[0].length)]);
            break;
          case '/projects':
            this.pageQuote = of(this.quotes[1][Math.floor(Math.random() * this.quotes[1].length)]);
            break;
          case '/history':
            this.pageQuote = of(this.quotes[2][Math.floor(Math.random() * this.quotes[2].length)]);
            break;
          case '/contact':
            this.pageQuote = of(this.quotes[3][Math.floor(Math.random() * this.quotes[3].length)]);
            break;
          case '/login':
            this.pageQuote = of(this.quotes[4][Math.floor(Math.random() * this.quotes[4].length)]);
            break;
        }
      }
    });

  }

  ngOnInit() {
  }

  click(){
    if(this.clickCount<15){
      this.clickCount+=1;
      if(this.clickCount==15){
        this.devModeOn = true;
        this.alertService.devModeOn();
      }
    }
  }
}
