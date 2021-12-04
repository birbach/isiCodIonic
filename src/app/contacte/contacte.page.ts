import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.page.html',
  styleUrls: ['./contacte.page.scss'],
})
export class ContactePage implements OnInit {

  emailForm= this.fb.group({
    nom: ['', Validators.required],
    email: ['', Validators.required],
    objet: [''],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private contactService: ContactService) { }
  ngOnInit() {
  }

  sendEmail(){
this.contactService.getEmailAPi(this.emailForm.value).pipe(take(1)).subscribe(data=>{
  console.log(data);
},error=>{
  console.log('erreur');
});
  }
}
