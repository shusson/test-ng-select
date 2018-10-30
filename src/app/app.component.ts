import { Component, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { startWith, map, debounceTime } from "rxjs/operators";

const DEFAULT_RESULTS = ["Abe", "Karen"];
const SEARCH_RESULTS = ["Dan", "Ben"];

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "test-ng-select";
    autocompleteInput$ = new Subject<string>();
    items = [];
    filter = {
        values: []
    };
    search$: Observable<any[]>;

    constructor() {}

    ngOnInit() {
        this.search$ = this.autocompleteInput$.pipe(
            startWith(""),
            debounceTime(300),
            map((term) => {
                const searchTerm = term && term.length > 0 ? term : "";
                if (!searchTerm) {
                    return DEFAULT_RESULTS;
                } else {
                    return SEARCH_RESULTS;
                }
            })
        );
    }
}
