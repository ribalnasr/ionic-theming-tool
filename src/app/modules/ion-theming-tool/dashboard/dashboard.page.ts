import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExportComponent } from '../export/export.component';
import { IonThemingToolService } from '../ion-theming-tool.service';
import { IonComponent } from '../ion-theming-tool.types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public theme = this.service.getTheme('default');

  public screenSize: 'sm' | 'md' | 'lg' = 'sm';

  public compareFn = (option: any, selection: any) => option?.tag === selection?.tag;

  constructor(
    public service: IonThemingToolService,
    private modal: ModalController
  ) { }

  public refreshStylesheet() {
    this.service.refreshStylesheet('default');
    this.service.refreshStylesheet('default', true);
  }

  public async downloadCSS() {
    const modal = await this.modal.create({
      component: ExportComponent,
      componentProps: {
        data: this.service.getStylesheet('default')
      }
    })
    modal.present()
  }

  ngOnInit() {
  }

}
