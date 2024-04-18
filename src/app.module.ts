import { NgModule } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { JsonFormComponent } from "./json-form/json-form.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule(
    {
        imports: [BrowserModule, FormsModule, HttpClientModule],
        declarations: [
            AppComponent, JsonFormComponent
        ],
        providers: [],
        bootstrap: [AppComponent]
    }
)
export class AppModule {

}