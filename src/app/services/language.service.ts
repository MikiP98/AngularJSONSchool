import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LanguageService {
    language = 'eng';  // Default language
    languageSubject = new BehaviorSubject<string>(this.language);  // Observable for language changes

    toggleLanguage() {
        this.language = this.language === 'eng' ? 'pl' : 'eng';  // Toggle between 'eng' and 'pl'
        this.languageSubject.next(this.language);
    }
}