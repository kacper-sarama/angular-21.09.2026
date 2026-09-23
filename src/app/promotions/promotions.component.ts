import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-promotions',
  styleUrl: './promotions.component.css',
  templateUrl: './promotions.component.html',
})
export class PromotionsComponent {
  
  router = inject(Router);

  handleGoHome() {
    this.router.navigate(['/']);
  }
}
