import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnimisPageRoutingModule } from './enimis-routing.module';

import { EnimisPage } from './enimis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnimisPageRoutingModule
  ],
  declarations: [EnimisPage]
})
export class EnimisPageModule {}
