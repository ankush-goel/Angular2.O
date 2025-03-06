import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Hello, {{ name }}!</p>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name: string = '';
}
