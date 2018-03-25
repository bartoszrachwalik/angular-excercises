import {Component} from '@angular/core';

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

  onAddServer() {
    this.servers.push('Another Server');
  }

  // intentional logic error
  onRemoveServer(id: number) {
    // const position = id + 1;
    const position = id;
    this.servers.splice(position, 1);
  }

}
