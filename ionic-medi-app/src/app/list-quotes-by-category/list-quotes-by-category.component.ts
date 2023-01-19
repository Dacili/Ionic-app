import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Quote } from '../../models/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-list-quotes-by-category',
  templateUrl: './list-quotes-by-category.component.html',
  styleUrls: ['./list-quotes-by-category.component.scss'],
})
export class ListQuotesByCategoryComponent implements OnInit {
  @Input() quotes = Array<Quote>();
  @Output() unselectCategory = new EventEmitter<boolean>();

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {}
  goBackToCategories() {
    this.unselectCategory.emit();
  }

  isFavoriteChanged(quote: any) {
    quote.isFavorite = !quote.isFavorite;
    this.quotesService.favoriteUpdateEmitter.next(true);
  }

}
