import { Component } from "@angular/core";
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
    this.http.post('../../assets/surver.json', survey);
  }
}
