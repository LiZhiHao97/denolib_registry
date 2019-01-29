import { Component, OnInit, NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";

@Component({
  selector: "app-module-details",
  templateUrl: "./module_details.html",
  styleUrls: ["./module_details.scss"]
})
export class ModuleDetails implements OnInit {
  ngOnInit() {}
}

@Component({
  selector: "app-module-details-keywords",
  templateUrl: "./module_details_keywords.html",
  styleUrls: ["./module_details_keywords.scss"]
})
export class ModuleDetailsKeywords implements OnInit {
  ngOnInit() {}
}

@Component({
  selector: "app-module-details-info",
  templateUrl: "./module_details_info.html",
  styleUrls: ["./module_details_info.scss"]
})
export class ModuleDetailsInfo implements OnInit {
  ngOnInit() {}
}

@NgModule({
  imports: [FlexLayoutModule],
  declarations: [ModuleDetails, ModuleDetailsKeywords, ModuleDetailsInfo],
  exports: [ModuleDetails, ModuleDetailsKeywords, ModuleDetailsInfo]
})
export class ModuleDetailsModule {}
