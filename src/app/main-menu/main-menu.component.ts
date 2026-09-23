import { Component, computed, input, OnInit, signal } from '@angular/core';
import { MenuItem } from '../app';
import { RouterLink } from '@angular/router';


@Component({
  imports: [RouterLink],
  selector: 'app-main-menu',
  styleUrl: './main-menu.component.css',
  templateUrl: './main-menu.component.html',
})
export class MainMenuComponent implements OnInit {

ngOnInit() {

  this.menuItemsInputUpdated.set(this.menuItemsInput());

  setTimeout(() => {
    // this.menuItemsInputUpdated.update(currentItems => [...currentItems, {name: 'name', link: 'link'}])
    this.menuItemsInputUpdated.update(currentItems  => {
      return [...currentItems, {name: 'name', link: 'link'}]
    }); 
  }, 5000);
  
}

  menuVisible = false;

  menuItemsInput = input<MenuItem[]>([]);
  menuItemsInputUpdated = signal<MenuItem[]>([]);

  showMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
