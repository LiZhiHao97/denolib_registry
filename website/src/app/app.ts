import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarModule } from "./shared/toolbar";
import { ModuleDetailsModule } from './pages/module_details';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app_routes";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrls: ["./app.scss"]
})
export class App {}

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ToolbarModule,
    ModuleDetailsModule,
    FlexLayoutModule
  ],
  bootstrap: [App]
})
export class AppModule {}
