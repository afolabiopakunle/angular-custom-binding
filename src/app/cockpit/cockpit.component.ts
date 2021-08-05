import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IComputer } from '../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() createDesktop = new EventEmitter<IComputer>();

  newPCDepartment;
  newPCDescription;
  constructor() { }

  ngOnInit() {
  }

  addDesktop(){
    this.createDesktop.emit({
      department: this.newPCDepartment,
      description: this.newPCDescription
    })
  }
  
  addLaptop(){}

}