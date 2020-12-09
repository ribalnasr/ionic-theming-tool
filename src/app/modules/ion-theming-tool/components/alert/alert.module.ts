import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertExamplesComponent } from './alert.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AlertExamplesComponent],
  exports: [AlertExamplesComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class AlertModule { }
