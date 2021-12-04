import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinisteresPageRoutingModule } from './ministeres-routing.module';

import { MinisteresPage } from './ministeres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinisteresPageRoutingModule
  ],
  declarations: [MinisteresPage]
})
export class MinisteresPageModule {}
