import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonThemingToolComponent } from './ion-theming-tool.component';
import { IonThemingToolService } from './ion-theming-tool.service';
import { IonThemingToolRoutingModule } from './ion-theming-tool-routing.module';



@NgModule({
  declarations: [
    IonThemingToolComponent,
  ],
  providers: [
    IonThemingToolService
  ],
  imports: [
    CommonModule,
    IonThemingToolRoutingModule,
  ],
  exports: [
    IonThemingToolComponent
  ],
})
export class IonThemingToolModule { }
