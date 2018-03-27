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
export class AppComponent {
  // undefined intentionally to get an error
  // servers;
  servers = [];
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];

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
}
