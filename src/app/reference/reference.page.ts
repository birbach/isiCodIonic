import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.page.html',
  styleUrls: ['./reference.page.scss'],
})
export class ReferencePage implements OnInit {

  allImg=[
    {imgUrl: 'assets/reference/archos.png' , alt: 'archos'},
    {imgUrl: 'assets/reference/barid_bank.png', alt: 'barid_bank' },
    {imgUrl: 'assets/reference/cosumar.jpg' , alt: 'cosumar'},
    {imgUrl: 'assets/reference/enasoft.jpg' , alt: 'enasoft'},
    {imgUrl: 'assets/reference/entraide_nationale.jpg' , alt: 'Entraide Nationale'},
    {imgUrl: 'assets/reference/finances.jpg' , alt: 'finances'},
    {imgUrl: 'assets/reference/inetum.png' , alt: 'inetum'},
    {imgUrl: 'assets/reference/intelcom.jpg' , alt: 'intelcom'},
    {imgUrl: 'assets/reference/laposte.jpg' , alt: 'la poste'},
    {imgUrl: 'assets/reference/maroc_telecome.jpg' , alt: 'maroc telecome'},
    {imgUrl: 'assets/reference/minister_sante.jpg' , alt: 'minister sante'},
    {imgUrl: 'assets/reference/ministere_agriculture.jpg' , alt: 'ministere_agriculture.jpg'},
    {imgUrl: 'assets/reference/neoxia.jpg' , alt: 'neoxia'},
    {imgUrl: 'assets/reference/omnishare.jpg' , alt: 'omnishare'},
    {imgUrl: 'assets/reference/project_7.jpg' , alt: 'project '},
    {imgUrl: 'assets/reference/tgr.png' , alt: 'tgr'},
    {imgUrl: 'assets/reference/crts.jpg' , alt: 'crts'},
    {imgUrl: 'assets/reference/ministere_transport.jpg' , alt: 'ministere de transport'},
];
  constructor() { }

  ngOnInit() {
  }
}
