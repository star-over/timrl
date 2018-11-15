import { HLItem } from './../layouts/hl-Item';
import { LLItem } from './../layouts/ll-items';
import {
  Component,
  OnInit
} from '@angular/core';
import { HL } from '../layouts/hl';
import { LL } from '../layouts/ll';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent implements OnInit {
  inputString = 'привет, привет!';
  outString = 'Это давольно длинная строчка чтобы проверить <strong>виджет,</strong> вот!';
  blink = false;
  wasError = false;
  targetChar: string;

  nbSp = '\u00A0';
  brSp = '\u0020';

  constructor() {}

  ngOnInit() {

    // заменяем все пробелы на неразрывные пробелы, чтобы они нормально отображались в начале и конце лейбла
    this.inputString = this.replaceBrspToNonBrsp(this.inputString);
  }

  /**
   * заменяем все обычные пробелы на неразрывные пробелы,
   * чтобы они нормально отображались в начале и конце лейбла
   * @param str Cтрока в которой надо заменить обычные пробелы
   * @returns  Строка с неразрывными пробелами
   */
  replaceBrspToNonBrsp(str: string) {
    return str.split(this.brSp).join(this.nbSp);
  }

  /**
   * Пакет действий при нажатии на клавишу в виджете
   * @param event - KeyboardEvent
   */
  doKeypress(event: Event) {
    const pressedChar: string = ( < KeyboardEvent > event).key;
    let isPressedOK: boolean;
    isPressedOK = false;

    if ((this.getTargetChar() === this.nbSp) && (pressedChar === this.brSp)) {
      isPressedOK = true;
    }

    if ((isPressedOK) || (pressedChar === this.getTargetChar())) {
      this.moveCharToOut();
      this.wasError = false;

    } else {

      this.wasError = true;
      console.log('eroor input char');
    }

    console.log(( < KeyboardEvent > event).key);
  }

  moveCharToOut() {
    if (this.wasError) {
      this.outString = this.outString + '<strong id="err">' + this.inputString[0] + '</strong>';
    } else {
      this.outString += this.inputString[0];
    }
    this.inputString = this.inputString.substr(1);
  }
  /**
   * Получаем первый символ из строки ввода
   * @returns target char - первый символ
   */
  getTargetChar(): string {
    return this.inputString.length > 0 ? this.inputString[0] : '';
  }
/**
 * Пакет при получении фокуса виджетом
 */
doFocus() {
    console.log('set focus');
    this.targetChar = this.getTargetChar();
    console.log(this.targetChar.charCodeAt(0));
    this.blink = true;

    console.log(this.findLLItemByChar(this.targetChar));
    console.log(this.getHLItem(this.findLLItemByChar(this.targetChar)));

    // TODO Start statistic
    // TODO Start timer
    // TODO start input in 3 sec
  }
/**
 * Пакет при потери фокуса
 */
doLostFocus() {
    console.log('lost focus');
    this.blink = false;
    // TODO Pause statistic
    // TODO Pause timer
    // TODO lock input
  }

  findLLItemByChar(targetChar: string): LLItem {
    console.log(targetChar);


    const l = LL.getInstance();
    console.log(l.items);
    const targetLLItem = l.items.find(i => i.char === targetChar);
    // TODO надо что то делать если символ не найден???

    return targetLLItem;
  }

  getHLItem(llitem: LLItem): HLItem {
    const h = HL.getInstance();
    console.log(llitem);
    const targetHLItem = h.items.find(i => i.vk === llitem.vk);
    // TODO надо что то делать если VK не найден???

   return targetHLItem;
  }

  getHLItemsForGrid(hlitem): HLItem[] {
    // TODO сделать выдачу массива VK для грида по target VK
    const h = HL.getInstance();
    return h.items;
  }
}
