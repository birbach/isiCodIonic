import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'propos',
        loadChildren: () => import('../propos/propos.module').then( m => m.ProposPageModule)
      },
      {
        path: 'technologie',
        loadChildren: () => import('../technologie/technologie.module').then( m => m.TechnologiePageModule)
      },
      {
        path: 'reference',
        loadChildren: () => import('../reference/reference.module').then( m => m.ReferencePageModule)
      },
      {
        path: 'partenaire',
        loadChildren: () => import('../partenaire/partenaire.module').then( m => m.PartenairePageModule)
      },
      {
        path: 'contacte',
        loadChildren: () => import('../contacte/contacte.module').then( m => m.ContactePageModule)
      },
      {
        path: 'localisation',
        loadChildren: () => import('../localisation/localisation.module').then( m => m.LocalisationPageModule)
      },
      {
        path: 'meteo',
        loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then( m => m.GalleryPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
