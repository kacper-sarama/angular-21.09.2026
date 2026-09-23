import { HttpClient, httpResource } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AuctionCardComponent } from '../shared/auction-card/auction-card.component';
import { AuctionsService } from './auctions.service';

export interface Auctions { 
  auctions: Auction[];
}

export interface Auction {  
description?: string,
id: string,
imgUrl: string,
price: number,
title: string
}

@Component({
  imports: [AuctionCardComponent],
  selector: 'app-auctions-page',
  styleUrl: './auctions-page.component.css',
  templateUrl: './auctions-page.component.html',
})
export class AuctionsPageComponent implements OnInit {

  constructor(private auctionService: AuctionsService){}

  // auctionsFromRequest = signal<Auction[]>([]);

  // auctions = httpResource<Auction[]>(() => 'http://localhost:3000/auctions');

  auctionsFromService = signal<Auction[]>([]);

  auctionsFromServiceInject = inject(AuctionsService);


  ngOnInit() {
    // this.http.get<Auction[]>('http://localhost:3000/auctions').subscribe((auctions) => {
    //   this.auctionsFromRequest.set(auctions);
    // })

    // this.auctionsFromService = this.auctionsFromServiceInject.auctions
  }

  handleAuctionFromChild(auction: Auction) {
    console.log('auction in parent: ', auction)
  }

}
