import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent implements OnInit {

  constructor() { }

  inputString: string;
  outString: string;

  ngOnInit() {
    this.inputString = 'first test string';
    this.outString = 'test out string';
  }

  doKeypress(event: Event) {
    const pressedChar: string = (<KeyboardEvent>event).key;

    if (pressedChar === this.getTargetChar()) {
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
    console.log(this.getTargetChar());

    // TODO Start statistic
    // TODO Start timer
    // TODO start input in 3 sec
  }

  doLostFocus() {
    console.log('lost focus');
    // TODO Pause statistic
    // TODO Pause timer
    // TODO lock input
  }

}
