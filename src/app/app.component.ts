import { Fingers } from './layouts/fingers';
import { HLItem } from './layouts/hlItem';
import { HL } from './layouts/hl';
import { Directions } from './shared/directions';
import { Component } from '@angular/core';
import { States } from './shared/states';
import { Hands } from './layouts/hands';
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

    const hlitem = new HLItem(VK.W, Hands.Left, Fingers .F1, -1, 1, VKTypes.normal );

    h.items.push(hlitem);

    // console.log(h);

    this.loadHL();
  }

  loadHL() {

    const temproryItems: HLItem[] = [

      new HLItem(VK.A, Hands.Left, Fingers.F4, 0, 1, VKTypes.normal),
      new HLItem(VK.Oem3, Hands.Left, Fingers.F4, -1, 2, VKTypes.normal),

      new HLItem ( VK.D1, Hands.Left, Fingers.F4, 0,  2, VKTypes.normal),
      new HLItem ( VK.D2, Hands.Left, Fingers.F3, 0,  2, VKTypes.normal),
      new HLItem ( VK.D3, Hands.Left, Fingers.F2, 0,  2, VKTypes.normal),
      new HLItem ( VK.D4, Hands.Left, Fingers.F1, 0,  2, VKTypes.normal),
      new HLItem ( VK.D5, Hands.Left, Fingers.F1, 1,  2, VKTypes.normal),
      new HLItem ( VK.D6, Hands.Right, Fingers.F1, -1,  2, VKTypes.normal),
      new HLItem ( VK.D7, Hands.Right, Fingers.F1, 0,  2, VKTypes.normal),
      new HLItem ( VK.D8, Hands.Right, Fingers.F2, 0,  2, VKTypes.normal),
      new HLItem ( VK.D9, Hands.Right, Fingers.F3, 0,  2, VKTypes.normal),
      new HLItem ( VK.D0, Hands.Right, Fingers.F4, 0,  2, VKTypes.normal),
      new HLItem ( VK.OemMinus, Hands.Right, Fingers.F4, 1,  2, VKTypes.normal), // -_
      new HLItem ( VK.OemPlus, Hands.Right, Fingers.F4, 2,  2, VKTypes.normal), //  =+

      new HLItem ( VK.Q, Hands.Left, Fingers.F4, 0,  1, VKTypes.normal),
      new HLItem ( VK.W, Hands.Left, Fingers.F3, 0,  1, VKTypes.normal),
      new HLItem ( VK.E, Hands.Left, Fingers.F2, 0,  1, VKTypes.normal),
      new HLItem ( VK.R, Hands.Left, Fingers.F1, 0,  1, VKTypes.normal),
      new HLItem ( VK.T, Hands.Left, Fingers.F1, 1,  1, VKTypes.normal),
      new HLItem ( VK.Y, Hands.Right, Fingers.F1, -1,  1, VKTypes.normal),
      new HLItem ( VK.U, Hands.Right, Fingers.F1, 0,  1, VKTypes.normal),
      new HLItem ( VK.I, Hands.Right, Fingers.F2, 0,  1, VKTypes.normal),
      new HLItem ( VK.O, Hands.Right, Fingers.F3, 0,  1, VKTypes.normal),
      new HLItem ( VK.P, Hands.Right, Fingers.F4, 0,  1, VKTypes.normal),
      new HLItem ( VK.Oem4, Hands.Right, Fingers.F4, 1,  1, VKTypes.normal), //  [{
      new HLItem ( VK.Oem6, Hands.Right, Fingers.F4, 2,  1, VKTypes.normal), //  ]}
      new HLItem ( VK.Oem5, Hands.Right, Fingers.F4, 3,  1, VKTypes.normal), //  \|

      new HLItem ( VK.A, Hands.Left, Fingers.F4, 0,  0, VKTypes.normal),
      new HLItem ( VK.S, Hands.Left, Fingers.F3, 0,  0, VKTypes.normal),
      new HLItem ( VK.D, Hands.Left, Fingers.F2, 0,  0, VKTypes.normal),
      new HLItem ( VK.F, Hands.Left, Fingers.F1, 0,  0, VKTypes.normal),
      new HLItem ( VK.G, Hands.Left, Fingers.F1, 1,  0, VKTypes.normal),
      new HLItem ( VK.H, Hands.Right, Fingers.F1, -1,  0, VKTypes.normal),
      new HLItem ( VK.J, Hands.Right, Fingers.F1, 0,  0, VKTypes.normal),
      new HLItem ( VK.K, Hands.Right, Fingers.F2, 0,  0, VKTypes.normal),
      new HLItem ( VK.L, Hands.Right, Fingers.F3, 0,  0, VKTypes.normal),
      new HLItem ( VK.Oem1, Hands.Right, Fingers.F4, 0,  0, VKTypes.normal), //  ;:
      new HLItem ( VK.Oem7, Hands.Right, Fingers.F4, 1,  0, VKTypes.normal), // '"

      new HLItem ( VK.Z, Hands.Left, Fingers.F4, 0,  -1, VKTypes.normal),
      new HLItem ( VK.X, Hands.Left, Fingers.F3, 0,  -1, VKTypes.normal),
      new HLItem ( VK.C, Hands.Left, Fingers.F2, 0,  -1, VKTypes.normal),
      new HLItem ( VK.V, Hands.Left, Fingers.F1, 0,  -1, VKTypes.normal),
      new HLItem ( VK.B, Hands.Left, Fingers.F1, 1,  -1, VKTypes.normal),
      new HLItem ( VK.N, Hands.Right, Fingers.F1, -1,  -1, VKTypes.normal),
      new HLItem ( VK.M, Hands.Right, Fingers.F1, 0,  -1, VKTypes.normal),
      new HLItem ( VK.OemComma, Hands.Right, Fingers.F2, 0,  -1, VKTypes.normal),
      new HLItem ( VK.OemPeriod, Hands.Right, Fingers.F3, 0,  -1, VKTypes.normal),
      new HLItem ( VK.Oem2, Hands.Right, Fingers.F4, 0,  -1, VKTypes.normal),  // /?

      new HLItem ( VK.Space, Hands.Left, Fingers.F0, 0,  0, VKTypes.extra ),
      new HLItem ( VK.RightSpace, Hands.Right, Fingers.F0, 0,  0, VKTypes.extra ),

      new HLItem ( VK.Shift, Hands.Left, Fingers.F4, -1,  -1, VKTypes.extra ),
      new HLItem ( VK.RightShift, Hands.Right, Fingers.F4, 1,  -1, VKTypes.extra ),

      new HLItem ( VK.Ctrl, Hands.Left, Fingers.F4, -1,  -2, VKTypes.extra ),
      new HLItem ( VK.RightCtrl, Hands.Right, Fingers.F4, 1,  -2, VKTypes.extra ),

      new HLItem ( VK.Alt, Hands.Left, Fingers.F0, -1,  0, VKTypes.extra ),
      new HLItem ( VK.RightAlt, Hands.Right, Fingers.F0, 1,  0, VKTypes.extra ),
    ];
console.log(temproryItems);


  }

}
