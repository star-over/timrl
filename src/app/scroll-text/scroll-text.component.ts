import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.css']
})
export class ScrollTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doKeypress(event: Event) {
    console.log(event.key);
  }
  doFocus() {
    console.log('set focus');
  }

  doLostFocus() {
    console.log('lost focus');
  }

}
