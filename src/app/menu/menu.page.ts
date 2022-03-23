import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus=[
    { title: 'HOME', url: '/menu/home', icon: 'home' },
    { title: 'À PROPOS', url: '/menu/propos', icon: 'book' },
    { title: 'TECHNOLOGIES', url: '/menu/technologie', icon: 'heart' },
    { title: 'RÉFÉRENCE', url: '/menu/reference', icon: 'archive' },
    { title: 'PARTENAIRES', url: '/menu/partenaire', icon: 'body' },
    { title: 'GALLERY', url: '/menu/gallery', icon: 'images' },
    { title: 'CONTACTEZ-NOUS', url: '/menu/contacte', icon: 'mail-unread' },
    { title: 'LOCALISATION', url: '/menu/localisation', icon: 'map' },
    { title: 'METEO', url: '/menu/meteo', icon: 'snow' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onMenuItem(value){
    this.router.navigateByUrl(value.url);
}

}
