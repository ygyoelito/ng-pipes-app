import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text & Dates',
            icon: 'pi pi-calendar-times',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'No Commons',
            icon: 'pi pi-bolt',
            routerLink: 'no-commons',
          },
        ],
      },
      {
        label: 'Customs Pipes',
        icon: 'pi pi-spin pi-cog',
        routerLink: 'sort',     
      },
    ];
  }
}
