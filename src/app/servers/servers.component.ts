import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created!';
  serverName:string = 'TestServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}
  onServerCreation() {
    this.serverCreationStatus = 'New Server was Created! Server Name is ' + this.serverName;
  }
  onUpdateServerName(event:Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

