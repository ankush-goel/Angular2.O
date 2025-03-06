import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HoverHighlightDirective,AutoFocusDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  showContent = false;
  toggleContent() 
  {
    this.showContent = !this.showContent;
  }
  items = ['BMW', 'Audi', 'Mercedes', 'Jaguar'];
  isActive = true;
}