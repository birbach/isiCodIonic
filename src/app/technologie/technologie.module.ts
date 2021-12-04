import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechnologiePageRoutingModule } from './technologie-routing.module';

import { TechnologiePage } from './technologie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechnologiePageRoutingModule
  ],
  declarations: [TechnologiePage]
})
export class TechnologiePageModule {}
