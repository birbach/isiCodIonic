import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtablissementPublicPage } from './etablissement-public.page';

const routes: Routes = [
  {
    path: '',
    component: EtablissementPublicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtablissementPublicPageRoutingModule {}
