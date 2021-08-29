import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  isPressedHamburgerButton = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isPressedHamburgerButton = !this.isPressedHamburgerButton;
  }

}
