import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardExamplesComponent } from './card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    CardExamplesComponent,
  ],
  exports: [
    CardExamplesComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class CardModule { }
