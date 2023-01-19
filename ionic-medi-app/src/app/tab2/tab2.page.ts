import { Component } from '@angular/core';
import { Quote } from '../../models/quote';
import { Category, QuotesService } from '../quotes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  selectedCategory = -1;
  categoryType = Category;
  categories = Array<string>();
  quotesBySelectedCategory = Array<Quote>();

  constructor(private quotesService: QuotesService) {
    this.categories = this.quotesService.getCategories();
  }

  loadQuotesByCategory(category: any) {
    this.selectedCategory = Number(this.categoryType[category]);
    this.quotesBySelectedCategory = this.quotesService.getQuotesByCategory(this.selectedCategory);
  }
}
