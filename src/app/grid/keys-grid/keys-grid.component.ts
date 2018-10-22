import { Directions } from 'src/app/shared/directions';
import { KeysGridItemModel } from 'src/app/grid/keys-grid-item/keys-grid-item.model';
import { Component, OnInit } from '@angular/core';
import { States } from 'src/app/shared/states';

@Component({
  selector: 'app-keys-grid',
  templateUrl: './keys-grid.component.html',
  styleUrls: ['./keys-grid.component.css']
})
export class KeysGridComponent implements OnInit {
  public readonly sharedStates = States;

  public readonly sharedDirections = Directions;
  public readonly rows: number = 5;

  items: KeysGridItemModel[] = [];

  constructor() {}

  ngOnInit() {
    this.initGrid();
  }

  addKey() {
    this.items.shift();
    this.items.push(new KeysGridItemModel('a', 1, 1, States.error, Directions.down));
  }

  getArrayIndes(row: number, col: number) {
    return (row - 1) * 9 + col - 1;
  }

  initGrid() {
    this.items.length = 0;

    this.items.push(new KeysGridItemModel('a', 1, 1, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('s', 1, 2, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('d', 1, 3, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('f', 1, 4, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('g', 1, 5, States.inactive, Directions.right));
    this.items.push(new KeysGridItemModel('h', 1, 6, States.inactive, Directions.right));
    this.items.push(new KeysGridItemModel('j', 1, 7, States.active,   Directions.none));
    this.items.push(new KeysGridItemModel('k', 1, 8, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('l', 1, 9, States.inactive, Directions.none));

    this.items.push(new KeysGridItemModel('a', 2, 1, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('s', 2, 2, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('d', 2, 3, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('f', 2, 4, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('g', 2, 5, States.inactive, Directions.up));
    this.items.push(new KeysGridItemModel('h', 2, 6, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('j', 2, 7, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('k', 2, 8, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('l', 2, 9, States.inactive, Directions.none));

    this.items.push(new KeysGridItemModel('a', 3, 1, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('s', 3, 2, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('d', 3, 3, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('f', 3, 4, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('g', 3, 5, States.inactive, Directions.up));
    this.items.push(new KeysGridItemModel('h', 3, 6, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('j', 3, 7, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('k', 3, 8, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('l', 3, 9, States.inactive, Directions.none));

    this.items.push(new KeysGridItemModel('a', 4, 1, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('s', 4, 2, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('d', 4, 3, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('f', 4, 4, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('g', 4, 5, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('h', 4, 6, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('j', 4, 7, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('k', 4, 8, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('l', 4, 9, States.inactive, Directions.none));

    this.items.push(new KeysGridItemModel('a', 5, 1, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('s', 5, 2, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('d', 5, 3, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('f', 5, 4, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('g', 5, 5, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('h', 5, 6, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('j', 5, 7, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('k', 5, 8, States.inactive, Directions.none));
    this.items.push(new KeysGridItemModel('l', 5, 9, States.inactive, Directions.none));
  }
}
