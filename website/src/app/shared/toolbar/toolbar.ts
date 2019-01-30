import { Component, OnInit, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.html",
  styleUrls: ["./toolbar.scss"]
})
export class Toolbar implements OnInit {
  logo: string = "assets/img/favicon.png";
  ngOnInit() {}
}

@NgModule({
  imports: [FlexLayoutModule],
  declarations: [Toolbar],
  exports: [Toolbar]
})
export class ToolbarModule {}
