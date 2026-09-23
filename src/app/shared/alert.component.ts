import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-alert',
  styleUrl: './alert.component.css',
  templateUrl: './alert.component.html',
})

export class AlertComponent {

  // inputValue = input.required<string>();

  inputValue = input<string>('');

}
