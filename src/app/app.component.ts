import { Component, VERSION } from '@angular/core';

export interface IComputer {
  type?: string,
  department: string,
  description: string,
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  computers: IComputer[] = [{
    type: 'desktop',
    department: 'Head Office',
    description: 'For the General Manager'
  }];

  onCreateDesktop(pcData: IComputer) {
    this.computers.push({
      type: 'desktop',
      department: pcData.department,
      description: pcData.description
    })
  }

  onCreateLaptop(pcData: IComputer) {
    this.computers.push({
      type: 'laptop',
      department: pcData.department,
      description: pcData.description
    })
  }
}
