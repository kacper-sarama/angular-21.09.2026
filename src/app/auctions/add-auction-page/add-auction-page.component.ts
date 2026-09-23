import {Component, computed, signal} from '@angular/core';
import {form, FormField, FormRoot} from '@angular/forms/signals';
import { Auction } from '../auctions-page.component';


@Component({
  imports: [FormField, FormRoot],
  selector: 'app-add-auction-page',
  styleUrl: './add-auction-page.component.css',
  templateUrl: './add-auction-page.component.html',
})
export class AddAuctionPageComponent {

  // loginModel = signal({
  //   email: '',
  //   password: '',
  // });

  imgUrl = computed(() => 'https://picsum.photos/id/1/600/600');

  formModel = signal<Auction>({
    description: '',
    id: '',
    imgUrl: '',
    price: 0,
    title: ''
  });

  auctionForm = form(this.formModel);

//   async onSubmit() {
//   const formData = this.formModel();
//   console.log(formData);
//   // Send to server
//   // await this.authService.login(formData);
// }

handleFormSubmit(event: Event): void {
    event.preventDefault();

    if (this.auctionForm().invalid()) {
      // nie ma markAllAsTouched jeszcze...
      // this.sampleForm().markAsTouched();
      this.auctionForm.title().markAsTouched();
      // this.sampleForm.post().markAsTouched();
      // this.errorMessage.set('Popraw błędy w formularzu !');
      return;
    }
    alert(JSON.stringify(this.formModel()));
  }

}
