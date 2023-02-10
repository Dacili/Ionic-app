import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Quote } from '../../models/quote';
import { QuotesService } from '../quotes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  favoriteQuotes = Array<Quote>();
  result: any;

  constructor(public quotesService: QuotesService, private actionSheetCtrl: ActionSheetController, private alertController: AlertController) {
    this.getFavoriteQuotes();
    this.quotesService.favoriteUpdateEmitter.subscribe(_ => {
      console.log()
      this.getFavoriteQuotes();
    })
  }

  getFavoriteQuotes() {
    this.favoriteQuotes = this.quotesService.getFavoriteQuotes();
  }

  async presentActionSheet(quote: Quote) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      subHeader: 'This action will remove the quote from favorites list.',
      buttons: [
        {
          text: 'Remove',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.data.action == 'delete') {
      this.quotesService.loadingQuotes = true;
      this.quotesService.updateIsFavorite(quote);
    }
    this.result = JSON.stringify(result, null, 2);
  }
}
