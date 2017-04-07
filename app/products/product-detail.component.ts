import {Component} from "@angular/core";
import {Product} from "./Product";

@Component({
    moduleId : module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product : Product;
}
