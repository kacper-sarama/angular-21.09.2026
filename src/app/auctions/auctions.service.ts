import { computed, Service } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { Auction } from './auctions-page.component';
import { environment } from '../../environments/environment';


@Service()
export class AuctionsService {

    // private baseUrl = 'http://localhost:3000/auctions';
    private baseUrl = environment.backendURL;

    private auctions = httpResource<Auction[]>(() => `${this.baseUrl}/auctions`);

    allAuctions = computed(() => {
        if (this.auctions.hasValue()) {
            return this.auctions.value();
        }
        return [];
    })

    areAuctionsLoading = computed(() => this.auctions.isLoading());

    error = computed(() => this.auctions.error());

    count = computed(() => this.auctions.hasValue() ? this.auctions.value().length : 0);

    reloadAuctions() {
        this.auctions.reload();
    }

}
