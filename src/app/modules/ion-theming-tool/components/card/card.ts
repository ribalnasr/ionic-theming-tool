import { IonComponent } from '../../ion-theming-tool.types';

export const ionCard: IonComponent = {
    name: 'Card',
    tag: 'ion-card',
    variables: [
        {

            name: '--background',
            description: `Background of the card`,
            value: ''
        },
        {

            name: '--color',
            description: `Color of the card`,
            value: ''
        }
    ]

};