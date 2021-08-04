import { Component, VERSION } from '@angular/core';

export interface IComputer {
  type: string,
  department: string,
  description: string,
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  computers:[];
  newServerName;
  newServerContent;
}
