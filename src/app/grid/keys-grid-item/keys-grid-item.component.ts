import { Component, Input, OnInit, Output } from '@angular/core';
import { States } from '../../shared/states';

@Component({
  selector: 'app-keys-grid-item',
  templateUrl: './keys-grid-item.component.html',
  styleUrls: ['./keys-grid-item.component.css']
})
export class KeysGridItemComponent implements OnInit {
  id: string = 'r1c1';
  @Input() char: string = 'j';
  row: number = 1;
  col: number = 1;
  @Input() state: States = States.active; 

  // @Output() States:any=Object.assign({},States);
  // public readonly currentStates = States;


  constructor() {    
   }

  ngOnInit() {
  }
  
/*   getState(){
    return States[this.state];
  } */

}
