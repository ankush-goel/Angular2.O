import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
