import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent implements OnInit {
  inputString = 'hellow hellow!';
  outString = 'test <strong>err</strong> string and te long long long textus';
  blink = false;
  wasError = false;

  nbSp = '\u00A0';
  brSp = '\u0020';

  constructor() { }

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

  doKeypress(event: Event) {
    const pressedChar: string = (<KeyboardEvent>event).key;
    let isPressedOK: boolean;
    isPressedOK = false;

    if (( this.getTargetChar() === this.nbSp) && (pressedChar === this.brSp)) {
      isPressedOK = true;
    }

    if ((isPressedOK) || (pressedChar === this.getTargetChar())) {
      this.moveCharToOut();
      this.wasError = false;

    } else {

      this.wasError = true;
      console.log('eroor input char');
    }

    console.log((<KeyboardEvent>event).key);
  }

  moveCharToOut() {
    if (this.wasError) {
      this.outString  = this.outString  + '<strong>' + this.inputString[0] + '</strong>';
    } else {
      this.outString  += this.inputString[0];
    }
    this.inputString = this.inputString.substr(1);
  }

  getTargetChar(): string {

    return this.inputString.length > 0 ? this.inputString[0] : '';
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
