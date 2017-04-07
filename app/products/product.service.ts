import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Product} from "./Product";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService {
    private productUrl = "https://api.myjson.com/bins/1ddw9n";

    constructor(private http: Http) {}

    //you don't need to return an Observable response, but an array of products! Use Map and Observable<Product[]> instead of Observable<Response>
    getProducts(): Observable<Product[]> {
        return this.http.get(this.productUrl)
            .map((response: Response) => <Product[]>response.json())
            //.do(data => console.log(JSON.stringify(data)))//peek at the  & display in nicer format
            .catch(ProductService.handleError);
    }

    private static handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
