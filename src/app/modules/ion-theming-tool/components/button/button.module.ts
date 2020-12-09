import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonExamplesComponent } from './button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ButtonExamplesComponent
  ],
  exports: [
    ButtonExamplesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ButtonModule { }
