import { HLItem } from './hl-Item';
/**
 Singleton котрый содержит информацию о текущей раскладке
 клавиатуры. Так как в каждый момент доступна только одна клавиатура. В массиве <code>movements</code>
 содержится инфиорамция о движениях пальцев, куда нужно переместить конкретный палец, чтобы нажать
 физическу кнопку на клавиатуре VK */
export class HL {
  constructor() {
      if (HL.instance) {
          throw new Error('Error - use Singleton.getInstance()');
      }
      this.member = 0;
  }
  private static instance: HL;
  // Assign "new Singleton()" here to avoid lazy initialisation

  member: number;
  id: string;
  name: string;
  version: number;
  items: HLItem[] = [];

  static getInstance(): HL {
      HL.instance = HL.instance || new HL();
      return HL.instance;
  }
}
