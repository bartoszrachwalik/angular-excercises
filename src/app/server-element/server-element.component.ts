import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // it makes this component's style global
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // allows to use that property by other components
  // you can use aliases; example: @Input('srvElement')
  @Input() element: {
    type: string,
    name: string,
    content: string;
  };
  // to check changes
  @Input() name: string;
  // in both ViewChild and ContentChild we should use local references names
  // if it is in the view of this component
  @ViewChild('heading') header: ElementRef;
  // if it is an other component content
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }
}
