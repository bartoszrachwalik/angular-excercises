import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // better approach than basic directive because you might not have direct access to DOM and the native element and it style
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // allows us to use directives as a reaction to events
  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
