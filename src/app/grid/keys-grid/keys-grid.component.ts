import { Directions } from 'src/app/shared/directions';
import { KeysGridItem } from 'src/app/grid/keys-grid-item/keys-grid-item.model';
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

  items: KeysGridItem[] = [];

  constructor() {}

  ngOnInit() {
    this.initGrid();
  }

  addKey() {
    this.items.shift();
    this.items.push(new KeysGridItem('a', 1, 1, States.error, Directions.down));
  }

  getArrayIndes(row: number, col: number) {
    return (row - 1) * 9 + col - 1;
  }

  initGrid() {
    this.items.length = 0;

    this.items.push(new KeysGridItem('a', 2, -4, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('s', 2, -3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('d', 2, -2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('f', 2, -1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('g', 2,  0, States.inactive, Directions.right));
    this.items.push(new KeysGridItem('h', 2,  1, States.inactive, Directions.right));
    this.items.push(new KeysGridItem('j', 2,  2, States.active,   Directions.none));
    this.items.push(new KeysGridItem('k', 2,  3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('l', 2,  4, States.inactive, Directions.none));

    this.items.push(new KeysGridItem('a', 1, -4, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('s', 1, -3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('d', 1, -2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('f', 1, -1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('g', 1,  0, States.inactive, Directions.up));
    this.items.push(new KeysGridItem('h', 1,  1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('j', 1,  2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('k', 1,  3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('l', 1,  4, States.inactive, Directions.none));

    this.items.push(new KeysGridItem('a', 0, -4, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('s', 0, -3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('d', 0, -2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('f', 0, -1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('g', 0,  0, States.inactive, Directions.up));
    this.items.push(new KeysGridItem('h', 0,  1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('j', 0,  2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('k', 0,  3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('l', 0,  4, States.inactive, Directions.none));

    this.items.push(new KeysGridItem('a', -1, -4, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('s', -1, -3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('d', -1, -2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('f', -1, -1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('g', -1,  0, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('h', -1,  1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('j', -1,  2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('k', -1,  3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('l', -1,  4, States.inactive, Directions.none));

    this.items.push(new KeysGridItem('a', -2, -4, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('s', -2, -3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('d', -2, -2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('f', -2, -1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('g', -2,  0, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('h', -2,  1, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('j', -2,  2, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('k', -2,  3, States.inactive, Directions.none));
    this.items.push(new KeysGridItem('l', -2,  4, States.inactive, Directions.none));
  }
}
