import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtablissementPublicPageRoutingModule } from './etablissement-public-routing.module';

import { EtablissementPublicPage } from './etablissement-public.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtablissementPublicPageRoutingModule
  ],
  declarations: [EtablissementPublicPage]
})
export class EtablissementPublicPageModule {}
