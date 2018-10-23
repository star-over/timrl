import { HLItem } from './layouts/hlItem';
import { HL } from './layouts/hl';
import { Directions } from './shared/directions';
import { Component } from '@angular/core';
import { States } from './shared/states';
import { Hands } from './layouts/hands';
import { Fingers } from './layouts/fingers';
import { VK } from './layouts/vk';
import { VKTypes } from './layouts/vkTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public readonly sharedStates = States;
  public readonly sharedDirections = Directions;

  doClick() {
    const h = HL.getInstance();
    h.name = 'hl name';
    h.version = 55;

    const hlitem = new HLItem(VK.W, Hands.Left, Fingers.F1, -1, 1, VKTypes.normal );

    h.items.push(hlitem);

    console.log(h);
  }
}
