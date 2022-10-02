import { Component } from '@angular/core';
import { Products } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Products[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      { code: 12, name: 'test', category: 'test', quantity: 300 },
      { code: 12, name: 'test', category: 'test', quantity: 300 },
      { code: 12, name: 'test', category: 'test', quantity: 300 },
      { code: 12, name: 'test', category: 'test', quantity: 300 },
    ];
  }
}
