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
  styleUrls: ['./servers.component.css'],
  styles: [`
    .fifthElement {
      color: white;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = 'Testserver';
  userName = '';
  servers = ['Testserver', 'Testserver2'];
  isAccessGranted = false;
  clicksArray = [];
  clicksCounter = 0;

  constructor() {
    setTimeout(() => {
        this.allowNewServer = true;
      }, 2000
    );
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    // it adds new element to array everytime server is created
    this.servers.push(this.serverName);
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

  toggleSecretPassword() {
    // this.clicksArray.push(++this.clicksCounter);
    // alternative with date
    this.clicksArray.push(new Date());
    this.isAccessGranted = !this.isAccessGranted;
  }
}
