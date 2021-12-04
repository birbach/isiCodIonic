import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologiePage } from './technologie.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologiePageRoutingModule {}
