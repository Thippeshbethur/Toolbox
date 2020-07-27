import { Component,OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import json from "../../assets/survey.json";


@Component({
  selector: "creator-page",
  templateUrl: "./creator.page.html",
})
export class CreatorPage {
  json = json;
  constructor(private http: HttpClient) {
    
  }
  onSurveySaved(survey) {
    this.json = survey;
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    this.http.post('http://localhost:8081/putjsondata',JSON.stringify(this.json), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }
}
