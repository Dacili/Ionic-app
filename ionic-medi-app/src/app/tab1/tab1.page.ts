import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  dailyQuote: Quote;

  ngOnInit() {
   

    }


  constructor(private quotesService: QuotesService) {
    this.dailyQuote = this.quotesService.quotes[0];
}

}
