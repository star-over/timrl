import { States } from 'src/app/shared/states';

export class KeysGridItemModel {

  constructor(
    public char: string,
    public row: number,
    public col: number,
    public state: States
    ) {}

    getId() {
      return  'r' + this.row + 'c' + this.col;
    }
}
