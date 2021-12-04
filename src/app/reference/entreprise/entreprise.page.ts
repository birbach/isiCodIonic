import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.page.html',
  styleUrls: ['./entreprise.page.scss'],
})
export class EntreprisePage implements OnInit {
  entrepriseImg=[
    {imgUrl: 'assets/reference/maroc_telecome.jpg' , alt: 'Maroc Telecome'},
    {imgUrl: 'assets/reference/cosumar.jpg', alt: 'Cosumar' },
    {imgUrl: 'assets/reference/archos.png' , alt: 'Archos Technology'},
    {imgUrl: 'assets/reference/intelcom.jpg' , alt: 'Intelcom satec group'},
    {imgUrl: 'assets/reference/enasoft.jpg' , alt: 'Enasoft'},
    {imgUrl: 'assets/reference/inetum.png' , alt: 'Inetum'},
    {imgUrl: 'assets/reference/neoxia.jpg' , alt: 'Neoxia'},
    {imgUrl: 'assets/reference/omnishare.jpg' , alt: 'Omnishare'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
