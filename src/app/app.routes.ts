import { Routes } from '@angular/router';
import { AuctionsPageComponent } from './auctions/auctions-page.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { AdvicesComponent } from './advices/advices.component';

export const routes: Routes = [
    { path: 'auctions', component: AuctionsPageComponent },
    { path: 'promotions', component: PromotionsComponent },
    { path: 'advices', component: AdvicesComponent }
];
