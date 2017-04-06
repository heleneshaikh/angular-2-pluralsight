import {Component} from '@angular/core';
import {ProductService} from "./products/product.service";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ pageTitle }}</h1>
        <products></products>
    `,
    providers: [ProductService]
})

export class AppComponent { ///then you can import it elsewhere
    pageTitle: string = 'Acme Product Management';
}
