import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class RoutingService {
    selectedContent: string = 'home'; // Default content to display
    selectedContentSubject = new BehaviorSubject<string>(this.selectedContent);  // Observable for content changes

    changeContent(tab: string) {
        this.selectedContent = tab;
        this.selectedContentSubject.next(this.selectedContent);
    }
}