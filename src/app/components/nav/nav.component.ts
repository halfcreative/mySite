import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';

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
      ['Get in touch with me!', 'Here\'s my number, call me maybe.', 'Feel free to contact me.',
       'Send something nice!', 'No spam please!']  // Quotes for Contact
    ];
  pageQuote: Observable<String>;

  constructor(private router: Router) {

    // Sets a random quote associated with the page to the navigation bar text field
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/home':
            this.pageQuote = of(this.quotes[0][Math.floor(Math.random() * this.quotes[0].length)]);
            break;
          case '/projects':
            this.pageQuote = of(this.quotes[1][Math.floor(Math.random() * this.quotes[1].length)]);
            break;
          case '/contact':
            this.pageQuote = of(this.quotes[2][Math.floor(Math.random() * this.quotes[2].length)]);
            break;
        }
      }
    });

  }

  ngOnInit() {
  }

}
