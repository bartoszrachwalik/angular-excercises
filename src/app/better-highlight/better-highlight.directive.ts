import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  // you can set an alias equal to selector, app.component html line 88
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // we have values available here before template is rendered so we dont't have a bug when initially background is transparent
    this.backgroundColor = this.defaultColor;
    // better approach than basic directive because you might not have direct access to DOM and the native element and it style
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // allows us to use directives as a reaction to events
  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
