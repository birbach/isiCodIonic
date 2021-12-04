import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinisteresPage } from './ministeres.page';

const routes: Routes = [
  {
    path: '',
    component: MinisteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinisteresPageRoutingModule {}
