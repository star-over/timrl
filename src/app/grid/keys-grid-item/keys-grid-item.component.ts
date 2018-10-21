import { Directions } from 'src/app/shared/directions';
import { Component, Input, OnInit, Output, Injectable } from '@angular/core';
import { States } from 'src/app/shared/states';

@Component({
  selector: 'app-keys-grid-item',
  templateUrl: './keys-grid-item.component.html',
  styleUrls: ['./keys-grid-item.component.css']
})

export class KeysGridItemComponent implements OnInit {
  // @Input() public char: string = 'j';
  // @Input() public state: States = States.active;
  public readonly sharedDirections = Directions;

  @Input() public char = 'j';
  @Input() public state: States = States.active;
  @Input() public direction: Directions = Directions.down;

  public id: string;
  public row: number;
  public col: number;


  constructor() {
   }

   ngOnInit() {
  }


}
