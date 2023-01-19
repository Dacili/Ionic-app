import { Component } from '@angular/core';
import { Quote } from '../../models/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favoriteQuotes = Array<Quote>();

  constructor(private quotesService: QuotesService) {
    this.getFavoriteQuotes();
    this.quotesService.favoriteUpdateEmitter.subscribe(_ => {
      console.log()
      this.getFavoriteQuotes();
    })
  }

  getFavoriteQuotes() {
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
  }

}
