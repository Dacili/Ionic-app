import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Quote } from '../../models/quote';
import { QuotesService } from '../quotes.service';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
// ADD /ngx IN ORDER TO WOOORK!!!

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  favoriteQuotes = Array<Quote>();
  result: any;
  @ViewChild('newImage') newImage:  ElementRef | undefined;

  constructor(public quotesService: QuotesService, private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController
    , private camera: Camera,
    private file: File
  ) {
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

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Are you sure you want to create a push notification?',
      message: '',
      buttons: ['Yes'],
    });

    await alert.present();
  }


  cameraOn() {
    console.log(this.newImage)
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      // omG, if we want base 64, here must go data_url,
      // if we put there FILE_URL, it will return file path
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      //alert(base64Image);
      //console.log(base64Image)
      this.newImage!.nativeElement.src = base64Image;
    });

//    this.camera.getPicture(options).then((imageData: string) => {
//      console.log('url is ' + imageData)
//      let fileName = imageData.split('/')[imageData.split('/').length-1];
//      console.log(fileName)
//      console.log(this.file.checkFile('file:///data/user/0/io.ionic.starter/cache', fileName))
//      this.file.readAsDataURL(this.file.dataDirectory, fileName).then(imageBase64 => {
//        console.log('usao u read url');
//        console.log('res je ' + imageBase64)
//      this.newImage!.nativeElement.src = imageBase64;
//      });

//  // imageData is either a base64 encoded string or a file URI
//  // If it's base64 (DATA_URL):
//    //let base64Image = 'data:image/jpeg;base64,' + imageData;
//    let base64Image =  imageData;
//    //this.newImage!.nativeElement.src = base64Image;
//    }, (err) => {
//      console.log(err)
//  // Handle error
//});
  }
}
