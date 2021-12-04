import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';
import { take } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

 dataMeteo: any;

 isValid = false;



  constructor(private meteoService: MeteoService,
    private alterController: AlertController,
    private fb: FormBuilder) { }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    villeForm = this.fb.group({
      city: ['', Validators.required]
    });

  ngOnInit() {
  }

  seacheWeather(){
    console.log(this.villeForm.value);
   this.meteoService.getMeteoData(this.villeForm.value.city).pipe(take(1)).subscribe(data=>{
      this.dataMeteo=data;
      this.isValid = true;
      console.log(data);
    }, error=>{
      this.presentAlert();
      this.isValid = false;
    });
  }

  async presentAlert() {
    const alert= await this.alterController.create({
      header: 'City incorrect',
      message: 'Please make sure city name is correct.',
      buttons: ['OK']

      });
      await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
