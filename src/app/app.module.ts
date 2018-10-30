import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgSelectModule } from "@ng-select/ng-select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NgSelectModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
