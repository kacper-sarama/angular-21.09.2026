import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
// import { AlertComponent } from './shared/alert.component';

export interface MenuItem {
  name: string,
  link: string
}

@Component({
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    MainMenuComponent, 
    // AlertComponent
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  alertType = 'alert-danger'

  menuItems: MenuItem[] = [
    {
      name: "Aukcje",
      link:"/auctions"
    },
    {
      name: "Promocje",
      link: "/promotions"
    },
    {
      name: "Podpowiadamy",
      link: "/advices"
    },

  ];

  // portalName: string = 'Portal Aukcyjny';

  // protected readonly title = signal('auction-portal');
}
