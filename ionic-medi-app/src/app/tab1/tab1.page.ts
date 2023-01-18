import { Component, OnInit } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  dailyQuote: Quote;

  ngOnInit() {
   

    }


  constructor() {
    this.dailyQuote = {
      id: 1,
      text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      author: "Albert Einstein",
      category: "Knowledge"
    }
}

}
