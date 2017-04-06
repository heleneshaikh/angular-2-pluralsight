import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ pageTitle }}</h1>
        <products></products>
    `
})
export class AppComponent { ///then you can import it elsewhere
    pageTitle: string = 'Acme Product Management';
}
