import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent implements OnInit {
  oddNumbersArray = [1, 3, 5];
  evenNumbersArray = [2, 4];
  onlyOdd = false;
  // undefined intentionally to get an error
  // servers;
  servers = [];
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onServerAdded2(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onServerAdded() {
    this.servers.push('Another Server');
  }

  // intentional logic error
  onRemoveServer(id: number) {
    // const position = id + 1;
    const position = id;
    this.servers.splice(position, 1);
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalEmitted(emittedNumber: number) {
    if (emittedNumber % 2 === 0) {
      this.evenNumbers.push(emittedNumber);
    } else {
      this.oddNumbers.push(emittedNumber);
    }
  }
}
