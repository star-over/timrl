import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent implements OnInit {
  inputString: string;
  outString: string;
  blink = false;

  nbSp = '\u00A0';
  brSp = '\u0020';

  constructor() { }

  ngOnInit() {

    this.inputString = 'first test string and we need typing any more.';
    this.outString = 'test out string';

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

  doKeypress(event: Event) {
    const pressedChar: string = (<KeyboardEvent>event).key;
    let isPressedOK: boolean;
    isPressedOK = false;

    if (( this.getTargetChar() === this.nbSp) && (pressedChar === this.brSp)) {
      isPressedOK = true;
    }

    if ((isPressedOK) || (pressedChar === this.getTargetChar())) {
      this.moveCharToOut();

    } else {


      console.log('eroor input char');
    }

    console.log((<KeyboardEvent>event).key);
  }

  moveCharToOut() {
    this.outString  += this.inputString[0];
    this.inputString = this.inputString.substr(1);
  }

  getTargetChar() {
    return this.inputString[0];
  }

  doFocus() {
    console.log('set focus');
    console.log(this.getTargetChar().charCodeAt(0));
    this.blink = true;
    // TODO Start statistic
    // TODO Start timer
    // TODO start input in 3 sec
  }

  doLostFocus() {
    console.log('lost focus');
    this.blink = false;
    // TODO Pause statistic
    // TODO Pause timer
    // TODO lock input
  }

  // TODO левый лейбл не уходит за левый край, надо чтобы уходил далеко за границу
}
