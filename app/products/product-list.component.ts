import {Component, OnInit} from '@angular/core';
import {Product} from "./Product";
import {ProductService} from "./product.service";

@Component({
    selector: 'products',
    moduleId: module.id, //available when using CommonJS module format, see: tsconfig.json. Then you can use the relative path below instead of app/products/...
    templateUrl: 'product-list.component.html', //path: in relation to index.html. Complete path seen in terminal
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: Product[];
    errorMessage: string;

    constructor(private productService: ProductService) {
        this.productService = productService;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void { //subscribe to service and wait for data/notification
      this.productService.getProducts().subscribe( //lazy: starts emitting results when calling subscribe. Subscribe to returned observable
          products => this.products = products, //property. ALso used in template
          error => this.errorMessage = <any>error);//if observable fails
    }

    onRatingClicked(message: string): void { //real world: receive input from form data
        this.pageTitle = 'Product list: ' + message;
    }
}

