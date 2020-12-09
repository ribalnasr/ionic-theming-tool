
export interface IonTheme {
  name: string;
  colors: IonColor[];
  components: IonComponent[];
}

export interface IonComponent {
  name: string;
  tag: string;
  variables: IonComponentVariable[]
}

export interface IonComponentVariable {
  name: string;
  description: string;
  value: any;
}

export interface IonColor {
  name: string;
  value: any;
}