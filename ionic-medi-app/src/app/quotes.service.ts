import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Quote } from '../models/quote';

export enum Category {
  Life,
  Success,
  Health,
  Love
}

@Injectable({
  providedIn: 'root'
})

 

export class QuotesService {
  public quotes = Array<Quote>();
  favoriteUpdateEmitter = new Subject<boolean>();

  constructor() {
    this.fillQuotes();
  }

  fillQuotes() {
    this.quotes.push({
      id: 1,
      text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      author: "Albert Einstein",
      category: Category.Success,
      isFavorite: false
    });
    this.quotes.push({
      id: 2,
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      category: Category.Success,
      isFavorite: false
    });
    this.quotes.push({
      id: 3,
      text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      author: "Oprah Winfrey",
      category: Category.Life,
      isFavorite: false
    });
    this.quotes.push({
      id: 4,
      text: "Whoever is happy will make others happy too.",
      author: "Anne Frank",
      category: Category.Love,
      isFavorite: false
    });
    this.quotes.push({
      id: 5,
      text: "Nothing destroys our health as physical inactivity.",
      author: "Aristotle ",
      category: Category.Health,
      isFavorite: false
    });
  }

  getCategories() {
   return ['Life','Success', 'Health', 'Love']
  }

  getFavoriteQuotes() {
    return this.quotes.filter(quote => quote.isFavorite === true);
  }

  getQuotesByCategory(category: number) {
    return this.quotes.filter(quote => quote.category == category);
  }

  updateIsFavorite(quote: Quote) {
    let quoteIndex = this.quotes.findIndex(q => q.id == quote.id);
    if (quoteIndex != -1) { 
    this.quotes[quoteIndex].isFavorite = !this.quotes[quoteIndex].isFavorite;
      this.favoriteUpdateEmitter.next(true);
      this.quotes = this.quotes;
    }
  }
}
