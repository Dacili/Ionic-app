import { Component, Input } from '@angular/core';
import { Quote } from '../../models/quote';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  @Input() quote?: Quote;

  constructor(private quotesService: QuotesService) {

  }

  isFavoriteChanged(quote: any) {
    this.quotesService.updateIsFavorite(quote);
    //quote.isFavorite = !quote.isFavorite;
    
  }
}
