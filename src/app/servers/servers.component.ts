import {Component, OnInit} from '@angular/core';

@Component({
  // selectors as element, attribute or class
  // selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
      }, 2000
    );
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServername(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser() {
    this.userName = '';
  }

  isUserNameEmpty() {
    return this.userName === '';
  }
}
