import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministeres',
  templateUrl: './ministeres.page.html',
  styleUrls: ['./ministeres.page.scss'],
})
export class MinisteresPage implements OnInit {

  ministereImg=[
    {imgUrl: 'assets/reference/ministere_agriculture.jpg' , alt: 'Ministere agriculture et de la peche maritime'},
    {imgUrl: 'assets/reference/ministere_transport.jpg' , alt: 'Ministere equipement et du transport et de la logistique et eau'},
    {imgUrl: 'assets/reference/finances.jpg' , alt: 'Ministere economie et des finaces'},
    {imgUrl: 'assets/reference/minister_sante.jpg' , alt: 'Rpyaume du maroc Ministere de la Sante'},
  ];
  constructor() { }

  ngOnInit() {
  }
}
