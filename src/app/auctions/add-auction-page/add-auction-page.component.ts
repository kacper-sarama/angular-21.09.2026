import {Component, computed, inject, signal} from '@angular/core';
import {form, FormField, FormRoot, required} from '@angular/forms/signals';
import { Auction } from '../auctions-page.component';
import { AuctionsService } from '../auctions.service';

export interface AuctionModel{
  title: Auction['title'],
  price:  Auction['price'],
  imgId:  number;
  description: string;
}

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

   private readonly initialState = {
    title: '',
    imgId: 1,
    price: 0,
    description: '',
  };


  private readonly auctionsFromServiceInject = inject(AuctionsService);  

  formModel = signal<AuctionModel>(this.initialState);

  imgUrl = computed(() => `https://picsum.photos/id/${this.formModel().imgId}/600/600`);

  auctionForm = form(
    this.formModel,
    (schemaPath) => {
      required(schemaPath.title, {message: 'Podaj tytul'});
    },
    {
    submission: {
      action: async () => {
        console.log('aktualna wartosc formularza: ', this.formModel)

        const {title, price, description } = this.formModel();

        const newAuction: Omit<Auction, 'id'> = {
          title,
          price,
          description,
          imgUrl: this.imgUrl()
        }

        console.log('newAuction: ', newAuction)
        this.auctionsFromServiceInject.addNew(newAuction);

        this.formModel.set(this.initialState);
      }
    }
  });

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
      // this.auctionForm.title().markAsTouched();
      // this.sampleForm.post().markAsTouched();
      // this.errorMessage.set('Popraw błędy w formularzu !');
      return;
    }
    alert(JSON.stringify(this.formModel()));
    // this.auctionsFromServiceInject.addNew(newAuction)
  }

}
