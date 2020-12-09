import { Component, Input, OnInit } from '@angular/core';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
})
export class ExportComponent implements OnInit {

  @Input() data: string;

  public status: 'copied' | 'copying' | 'copy' = 'copy';

  constructor() { }

  ngOnInit() {
    console.log(this.data)

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
