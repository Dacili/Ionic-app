import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categories = Array<string>();
  constructor() {
    this.categories.push('Life');
    this.categories.push('Success');
    this.categories.push('Health');
    this.categories.push('Love');
  }

}
