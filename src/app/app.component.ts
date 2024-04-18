import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  jsonData: any;

  constructor() { }

  loadJson(event: any): void {
    console.log("Detected file change");

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.jsonData = JSON.parse(reader.result as string);
    };
    reader.readAsText(file);
  }
}
