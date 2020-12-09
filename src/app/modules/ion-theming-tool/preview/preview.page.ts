import { Component, OnInit } from '@angular/core';
import { IonThemingToolService } from '../ion-theming-tool.service';
import { IonComponent } from '../ion-theming-tool.types';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  public theme = this.service.getTheme('default');


  constructor(
    public service: IonThemingToolService,
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.service.getLocallySavedSelectedComponent()
    }, 1000)
  }

}
