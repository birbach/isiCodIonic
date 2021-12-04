import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferencePage } from './reference.page';

const routes: Routes = [
  {
    path: '',
    component: ReferencePage
  },
  {
    path: 'ministeres',
    loadChildren: () => import('./ministeres/ministeres.module').then( m => m.MinisteresPageModule)
  },
  {
    path: 'etablissement-public',
    loadChildren: () => import('./etablissement-public/etablissement-public.module').then( m => m.EtablissementPublicPageModule)
  },
  {
    path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then( m => m.EntreprisePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferencePageRoutingModule {}
