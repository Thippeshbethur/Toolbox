import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { SurveyComponent } from "./components/survey.component";
import { HomePage } from "./pages/home.page";
import { SurveyPage } from "./pages/survey.page";
import { SurveyCreatorComponent } from "./components/survey.creator.component";
import { CreatorPage } from "./pages/creator.page";
import { SurveyAnalyticsComponent } from "./components/survey.analytics.component";
import { AnalyticsPage } from "./pages/analytics.page";
import { PdfExportPage } from "./pages/pdfexport.page";
import { FileSaverModule } from 'ngx-filesaver';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    SurveyComponent,
    SurveyPage,
    SurveyCreatorComponent,
    CreatorPage,
    SurveyAnalyticsComponent,
    AnalyticsPage,
    PdfExportPage,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule,FileSaverModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
