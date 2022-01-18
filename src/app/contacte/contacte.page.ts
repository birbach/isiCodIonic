import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Email } from '../model/email';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.page.html',
  styleUrls: ['./contacte.page.scss'],
})
export class ContactePage implements OnInit {

  email: Email[];
  emailForm= this.fb.group({
    toEmail: ['', Validators.required],
    subject: [''],
    body: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private alterController: AlertController,
    private contactService: ContactService) { }
  ngOnInit() {
  }

  sendEmail(){
    console.log(this.emailForm.value);
this.contactService.getEmailAPi(this.emailForm.value).pipe(take(1)).subscribe(data=>{
  console.log(data);
  this.email=data;
},error=>{
  console.log('erreur');
  this.presentAlert();
});
  }

  async presentAlert() {
    const alert= await this.alterController.create({
      header: 'NOT VALIDE',
      message: 'Please make sure that you fill in all the fields',
      buttons: ['OK']

      });
      await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
