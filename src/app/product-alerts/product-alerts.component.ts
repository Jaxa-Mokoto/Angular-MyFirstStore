import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
// @Component is a decorator that indicates that the following calass is a component. A component class handles data and functionality.

// The @Component() definition also exports the class ProductAlertsComponent which handles functionality for the component.

@Component({
  selector: 'app-product-alerts', // The selector identifies the component. Angualr selectors begin with the prefix 'app-' followed by the component name.

  //The template and style filenames reference the componenet's HTML and CSS.
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent {
  // The @Input decorator indicates that the property value passes in from the component's parent ProductListComponent

  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
}
