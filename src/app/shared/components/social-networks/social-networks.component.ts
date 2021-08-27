import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {

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
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      "youtube",
      this.domSanitizer.bypassSecurityTrustResourceUrl('./../../assets/svg/social_networks/youtube.svg')
    );
  }

  ngOnInit(): void {
  }

}
