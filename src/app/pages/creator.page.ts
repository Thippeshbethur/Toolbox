import { Component,OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import json from "../../assets/survey.json";
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: "creator-page",
  templateUrl: "./creator.page.html",
})
export class CreatorPage {
  json = json;
  constructor(private http: HttpClient,
    private _FileSaverService: FileSaverService) {
    
  }
  onSurveySaved(survey) {
    this.json = survey;
    const fileName = 'save.json';    
    const fileType = this._FileSaverService.genType(fileName);
    const txtBlob = new Blob([JSON.stringify(this.json)], { type: fileType });
    this._FileSaverService.save(txtBlob, fileName);
    
  }
}
