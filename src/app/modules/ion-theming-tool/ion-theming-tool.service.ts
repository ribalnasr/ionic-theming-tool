import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ionAlert } from './components/alert/alert';
import { ionButton } from './components/button/button';
import { ionCard } from './components/card/card';
import { IonComponent, IonTheme } from './ion-theming-tool.types';

@Injectable({
  providedIn: 'root'
})
export class IonThemingToolService {

  public selectedComponentChanges = new ReplaySubject<IonComponent>();
  private _selectedComponent: IonComponent;
  public get selectedComponent() {
    return this._selectedComponent;
  }
  public set selectedComponent(value) {
    this._selectedComponent = value;
    localStorage.setItem('selected-component', JSON.stringify(value))
    this.selectedComponentChanges.next(value);
  }

  public themes: IonTheme[] = [
    {
      name: 'default',
      colors: [
        {
          name: 'primary',
          value: '#3880ff'
        }
      ],
      components: [
        ionButton,
        ionAlert,
        ionCard
      ]
    }
  ];

  constructor(
  ) {
    this.getLocallySavedSelectedComponent();
  }

  public getLocallySavedSelectedComponent() {
    const localSelectedComponent = JSON.parse(localStorage.getItem('selected-component'));
    if (localSelectedComponent?.tag !== this.selectedComponent?.tag) {
      this.selectedComponent = localSelectedComponent;
    }
  }

  public getTheme(name: string) {
    return this.themes.find(theme => theme.name === name);
  }

  public getStylesheet(theme: string) {
    let componentStyles = '';
    for (const component of this.getTheme(theme).components) {
      componentStyles += component.tag + '{\n';
      let componentVariables = '';
      for (const variable of component.variables) {
        if (variable.value) {
          componentVariables += '  ' + variable.name + ': ' + variable.value + ';\n'
        }
      }

      componentStyles += componentVariables;
      componentStyles += '}\n';
    }

    const styles = `
:root {
  --ion-color-primary: #ff0000;
  --ion-color-primary-rgb: 255,0,0;
  --ion-color-primary-contrast: #ff0000;
  --ion-color-primary-contrast-rgb: 255,0,0;
  --ion-color-primary-shade: #ff0000;
  --ion-color-primary-tint: #ff0000;
}
${componentStyles}
        `;
    return styles;
  }

  public refreshStylesheet(getStylesheet: string, iframe?: boolean) {



    let contentDocument: Document;
    if (iframe) {
      contentDocument = document.querySelector('iframe').contentDocument;
    } else {
      contentDocument = document;
    }

    let stylesheet = contentDocument.querySelector('style#ionicStylesheet');
    if (!stylesheet) {
      const styleTag = contentDocument.createElement('style');
      styleTag.id = 'ionicStylesheet';
      contentDocument.querySelector('head').appendChild(styleTag);
    }
    stylesheet = contentDocument.querySelector('style#ionicStylesheet');
    stylesheet.textContent = this.getStylesheet(getStylesheet)
    // console.log(stylesheet.innerHTML)
  }
}
