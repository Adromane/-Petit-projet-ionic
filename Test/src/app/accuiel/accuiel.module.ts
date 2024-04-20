import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccuielPageRoutingModule } from './accuiel-routing.module';

import { AccuielPage } from './accuiel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccuielPageRoutingModule
  ],
  declarations: [AccuielPage]
})
export class AccuielPageModule {}
