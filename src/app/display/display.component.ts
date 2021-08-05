import { Component, OnInit, Input } from '@angular/core';
import { IComputer } from '../app.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
})
export class DisplayComponent implements OnInit {
  @Input() computer: IComputer;
  
  constructor() { }

  ngOnInit() {
  }

}