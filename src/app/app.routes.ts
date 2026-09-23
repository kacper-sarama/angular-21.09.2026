import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AdvicesComponent } from './advices/advices.component';
import { AuctionCardComponent } from './shared/auction-card/auction-card.component';
import { CartPage } from './auctions/cart-page/cart-page';
import { AddAuctionPageComponent } from './auctions/add-auction-page/add-auction-page.component';

export const routes: Routes = [
    { path: 'auctions', component: AuctionsPageComponent },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'advices', component: AdvicesComponent },
    { path: 'add-auction', component: AddAuctionPageComponent },
    { path: 'cart', component: CartPage }
];
