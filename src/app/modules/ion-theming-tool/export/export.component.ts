import { Component, Input, NgZone, OnChanges, OnInit } from '@angular/core';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
})
export class ExportComponent implements OnInit {

  @Input() data: string;

  public status: 'copied' | 'copying' | 'copy' = 'copy';

  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.zone.runOutsideAngular(() => {
      const data = this.data;
      this.data = '';
      setTimeout(() => {
        this.zone.run(() => {
          this.data = data
        })
      }, 200)
    })

  }

  async copyToClipboard(textArea: IonTextarea) {
    this.status = 'copying';
    const inputElement = await textArea.getInputElement();
    inputElement.select();
    document.execCommand('copy');
    // inputElement.setSelectionRange(0, inputElement.value.length);
    this.status = 'copied';
  }

}
