import {Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appMyNgStyle]',
})
export class MyNgStyleDirective {
  @Input('appMyNgStyle') style;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit() {
    for (let key in this.style ) {
      this.renderer.setStyle(this.element.nativeElement, key, this.style[key]);
    }
  }
}
