import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etablissement-public',
  templateUrl: './etablissement-public.page.html',
  styleUrls: ['./etablissement-public.page.scss'],
})
export class EtablissementPublicPage implements OnInit {
  etablisementPublicImg=[
    {imgUrl: 'assets/reference/tgr.png' , alt: 'TGR'},
    {imgUrl: 'assets/reference/barid_bank.png', alt: 'barid bank' },
    {imgUrl: 'assets/reference/entraide_nationale.jpg' , alt: 'Entraide nationale'},
    {imgUrl: 'assets/reference/project_7.jpg' , alt: 'project'},
    {imgUrl: 'assets/reference/crts.jpg' , alt: 'crts'},
    {imgUrl: 'assets/reference/laposte.jpg' , alt: 'Poste Maroc'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
