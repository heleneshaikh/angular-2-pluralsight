/**
 * Created by heleneshaikh on 05/04/2017.
 */

import {Pipe, PipeTransform} from "@angular/core";
import {Product} from "./Product";

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform { //value: waar op ge wilt filteren
    transform(value: Product[], filterBy: string) : Product[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;

        if (filterBy) {
            return value.filter((product : Product) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
        } else {
            return value;
        }
    }
}
