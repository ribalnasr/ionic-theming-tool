import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportComponent } from './export.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExportComponent
  ],
  exports: [
    ExportComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ExportModule { }
