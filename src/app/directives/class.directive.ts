import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClass]',
  host: {
    '(click)': 'onClick()'
  }
})
export class ClassDirective {
  @Input('appClass') class;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  onClick() {
    this.renderer.addClass(this.element.nativeElement, this.class);
  }
}
