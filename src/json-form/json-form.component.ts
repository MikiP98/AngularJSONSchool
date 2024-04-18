import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrl: './json-form.component.css'
})
export class JsonFormComponent {
  @Input() jsonData: any;
  formFields: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.parseJson();
  }
  ngOnChanges(): void {
    this.parseJson();
  }

  parseJson(): void {
    this.formFields = [];
    console.log("Creating form");
    for (let key in this.jsonData) {
      if (this.jsonData.hasOwnProperty(key)) {
        const field = {
          label: key,
          type: this.jsonData[key].type,
          options: this.jsonData[key].options || []
        };
        this.formFields.push(field);
      }
    }
  }

  submitForm(): void {
    console.log("Sending form!")

    let params: { [key: string]: any} = {};
    // let queryParams = new HttpParams({fromObject:{group_id, test_id: id, exam}});
    // return this.http.get<ParamsResponse>(this.endpointURL,{params:queryParams});
    let string_get = "?";
    for (const key in this.jsonData) {
      console.log("Key", key);

      let inputValue;
      if (this.jsonData[key].type === 'select') {
        inputValue = (document.getElementById(key) as HTMLSelectElement).value;
      } else {
        inputValue = (document.getElementById(key) as HTMLInputElement).value;
      };
      params[key] = inputValue;
      string_get += key + '=' + inputValue + '&';
    }
    let string_get_new = "";
    for(let i = 0; i < string_get.length - 1; i++) {
      string_get_new += string_get[i];
    }
    console.log(params)

    console.log("string_get_new:",string_get_new);
    // window.location.href = 'http://localhost:4200' + string_get_new;

    let queryParams = new HttpParams({fromObject:params});
    this.http.get<any>('http://matfil.pl/',{params:queryParams})
      .subscribe(
        data=>{},
        // error => {}
      )

    // this.http.get<any>('http://localhost:4200' + string_get, { params }).subscribe(a=>{})
      // .subscribe(
      //   data => {
      //     this.receivedData = data;
      //   },
      //   error => {
      //     console.error('Error:', error);
      //   }
      // );
  }
}
