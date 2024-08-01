import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];
  protected readonly sessionStorage = sessionStorage;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.setMenuItems();
  }

  setMenuItems(): void {
    this.menuItems = [
      {
        id: '1',
        label: 'Sign out',
        icon: 'pi pi-sign-out',
        command: () => {
          this.authService.logout();
        }
      },
    ];
  }
}
