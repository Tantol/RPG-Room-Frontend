import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  showHideMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
