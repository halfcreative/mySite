import { Component } from '@angular/core';
import { RouterOutlet, OutletContext } from '@angular/router';
import { fadeAnimation } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Animation for RouterOutlet
    fadeAnimation
  ]
})
export class AppComponent {
  title = 'mySite';

  /**
   * prepareRoute will add animations to any changes in the router outlet
   * @param outlet
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
