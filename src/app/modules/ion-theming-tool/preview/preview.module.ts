import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewPageRoutingModule } from './preview-routing.module';

import { PreviewPage } from './preview.page';
import { AlertModule } from '../components/alert/alert.module';
import { ButtonModule } from '../components/button/button.module';
import { CardModule } from '../components/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewPageRoutingModule,
    // Ion Components
    ButtonModule,
    AlertModule,
    CardModule,

  ],
  declarations: [PreviewPage]
})
export class PreviewPageModule { }
