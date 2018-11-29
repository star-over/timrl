import { Directions } from 'src/app/shared/directions';
import { States } from 'src/app/shared/states';

export class KeysGridItem {

  constructor(
    public char: string,
    public row: number,
    public col: number,
    public state: States,
    public direction: Directions
    ) {}

    getId() {
      return  'r' + this.row + 'c' + this.col;
    }
}
