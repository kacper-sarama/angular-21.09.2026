import { Component, input, output, signal } from '@angular/core';
import { Auction } from '../../auctions/auctions-page.component';

@Component({
  imports: [],
  selector: 'app-auction-card',
  styleUrl: './auction-card.component.css',
  templateUrl: './auction-card.component.html',
})
export class AuctionCardComponent {

  auctionItemIinput = input.required<Auction>();

  addToCartEvent = output<Auction>();

  handleAddAuctionCard() {
    console.log('auctionItemIinput: ', this.auctionItemIinput());
    this.addToCartEvent.emit(this.auctionItemIinput())
  }

}
