import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

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
    content: string
  };

  constructor() {
  }

  ngOnInit() {
  }

}
