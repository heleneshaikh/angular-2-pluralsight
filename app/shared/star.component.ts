import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
    selector: 'star', // you can reuse it anywhere
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating: number; //text, get this from container
    starWidth: number; //calculated based on the rating
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
       this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void { //only fires with @input properties. lifecycle event
        this.starWidth = this.rating * 86 / 5;
    }
}
