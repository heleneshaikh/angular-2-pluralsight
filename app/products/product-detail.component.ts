import {Component} from "@angular/core";
import {Product} from "./Product";
//import {ActivatedRoute} from "@angular/router";

@Component({
    moduleId : module.id,
    templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
    product : Product;
    pageTitle: string = 'Product Detail';
}
