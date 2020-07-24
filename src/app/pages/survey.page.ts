import { Component } from "@angular/core";

import json from "../../assets/survey.json";

@Component({
  selector: "survey-page",
  templateUrl: "./survey.page.html",
})
export class SurveyPage {
  title = "Quiz";
  json;

  constructor() {
    this.json = json;
  }

  sendData(result) {
    //TODO update with your own behavior
    console.log(result);
  }
}
