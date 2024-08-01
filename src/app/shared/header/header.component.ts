import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];
  protected readonly sessionStorage = sessionStorage;

  constructor() {
  }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems(): void {
    this.menuItems = [
      {
        id: '1',
        label: 'Logout',
        icon: 'pi pi-sign-out',
      },
    ];
  }
}
