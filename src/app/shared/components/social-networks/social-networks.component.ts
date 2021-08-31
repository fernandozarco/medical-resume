import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: []
})
export class SocialNetworksComponent implements OnInit {

  @Input() iconType: String;
  isLight: boolean;
  isDark: boolean;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "facebook",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/12955632731555589920.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "instagram_original",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/2504645431599781003.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "youtube",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/youtube.svg')
    );
  }

  ngOnInit(): void {
    this.isLight = this.iconType === "light-icon" ? true : false;
    this.isDark = this.iconType === "dark-icon" ? true : false;
  }

}
