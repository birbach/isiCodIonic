import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  imageTitle: any;
  currentPage = 1;
  pageSize = 10;
  photosData: any[] = [];
  totalPage: any;

  constructor(private gallaryService: GalleryService,
    private alterController: AlertController,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    if (this.photosData != null) {
      await loading.present();
    }
    else {
      await loading.dismiss();
    }
    // await loading.dismiss();
  }
  onLoadImages() {
    this.photosData = [];
    this.currentPage = 1;
    this.totalPage = 0;
    this.doSearch();
  }

  doSearch() {
    this.gallaryService.getListPhotos(this.imageTitle, this.pageSize, this.currentPage).
      pipe(take(1)).subscribe(data => {
        console.log(data.hits);
        data.hits.forEach(image => {
          console.log('data');
          this.photosData.push(image);
        });
        if (data.hits.length === 0) {
          console.log('no data');
          this.presentAlert();
        }
        this.totalPage = data.totalHits / this.pageSize;
      }, err => {
        console.log(err);
      });
  }

  async presentAlert() {
    const alert = await this.alterController.create({
      header: 'mot introuvable',
      message: 'We didn\'t find this word',
      buttons: ['OK']

    });
    await alert.present();

    // const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  loadData(event) {
    if (this.currentPage < this.totalPage) {
      console.log(this.currentPage + '/' + this.totalPage);
      ++this.currentPage;
      this.doSearch();
      event.target.complete();
    }

    if (this.currentPage >= this.totalPage) {
      event.target.disabled = true;
    }
  }
}
