import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navOptions = [
    {
      name: 'New Product',
      path: '',
    },
    {
      name: 'Product List',
      path: '/product-list',
    },
  ];
}
