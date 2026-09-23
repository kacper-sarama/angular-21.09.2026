import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrls: ["header.component.css"],
  templateUrl: "header.component.html",
})

export class HeaderComponent {

  portalName: string = 'Portal Aukcyjny';
  
  isChanged = false;

  protected readonly alreadyWorks = signal('funkcja Kup Teraz, już działa !');

  changeTitle() {
    this.isChanged = !this.isChanged;
  }

}
