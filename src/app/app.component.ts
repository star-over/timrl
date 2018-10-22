import { Directions } from './shared/directions';
import { Component } from '@angular/core';
import { States } from './shared/states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public readonly sharedStates = States;
  public readonly sharedDirections = Directions;
}
