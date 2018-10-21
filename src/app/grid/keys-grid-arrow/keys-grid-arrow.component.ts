import { Directions } from 'src/app/shared/directions';
import { Component, OnInit, Input } from '@angular/core';
import { States } from 'src/app/shared/states';

@Component({
  selector: 'app-keys-grid-arrow',
  templateUrl: './keys-grid-arrow.component.html',
  styleUrls: ['./keys-grid-arrow.component.css']
})
export class KeysGridArrowComponent implements OnInit {
  public readonly sharedStates = States;
  public readonly sharedDirections = Directions;

  @Input() public direction: Directions = Directions.up;
  @Input() public state: States = States.active;

  constructor() { }

  ngOnInit() {
  }

}
