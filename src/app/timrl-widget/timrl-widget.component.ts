import { Component, OnInit } from '@angular/core';
import { States } from '../shared/states';
import { Directions } from '../shared/directions';
import { LLItem } from '../layouts/ll-items';
import { VK } from '../layouts/vk';
import { HLItem } from '../layouts/hl-Item';
import { Hands } from '../layouts/hands';
import { Fingers } from '../layouts/fingers';
import { VKTypes } from '../layouts/vk-types';
import { HL } from '../layouts/hl';

@Component({
  selector: 'app-timrl-widget',
  templateUrl: './timrl-widget.component.html',
  styleUrls: ['./timrl-widget.component.css']
})
export class TimrlWidgetComponent implements OnInit {
  public readonly sharedStates = States;
  public readonly sharedDirections = Directions;

  constructor() { }

  doClick() {
    const h = HL.getInstance();
    h.name = 'hl name';
    h.version = 55;

    const hlitem = new HLItem(VK.W, Hands.Left, Fingers.F1, -1, 1, VKTypes.normal);

    h.items.push(hlitem);

    // console.log(h);

    this.loadHL();
    this.loadLL();
  }

  loadHL() {

    // TODO Вынести в отдельный сервис
    const temproryItems: HLItem[] = [

      new HLItem(VK.Oem3, Hands.Left, Fingers.F4, -1, 2, VKTypes.normal),

      new HLItem(VK.D1, Hands.Left, Fingers.F4, 0, 2, VKTypes.normal),
      new HLItem(VK.D2, Hands.Left, Fingers.F3, 0, 2, VKTypes.normal),
      new HLItem(VK.D3, Hands.Left, Fingers.F2, 0, 2, VKTypes.normal),
      new HLItem(VK.D4, Hands.Left, Fingers.F1, 0, 2, VKTypes.normal),
      new HLItem(VK.D5, Hands.Left, Fingers.F1, 1, 2, VKTypes.normal),
      new HLItem(VK.D6, Hands.Right, Fingers.F1, -1, 2, VKTypes.normal),
      new HLItem(VK.D7, Hands.Right, Fingers.F1, 0, 2, VKTypes.normal),
      new HLItem(VK.D8, Hands.Right, Fingers.F2, 0, 2, VKTypes.normal),
      new HLItem(VK.D9, Hands.Right, Fingers.F3, 0, 2, VKTypes.normal),
      new HLItem(VK.D0, Hands.Right, Fingers.F4, 0, 2, VKTypes.normal),
      new HLItem(VK.OemMinus, Hands.Right, Fingers.F4, 1, 2, VKTypes.normal), // -_
      new HLItem(VK.OemPlus, Hands.Right, Fingers.F4, 2, 2, VKTypes.normal), //  =+

      new HLItem(VK.Q, Hands.Left, Fingers.F4, 0, 1, VKTypes.normal),
      new HLItem(VK.W, Hands.Left, Fingers.F3, 0, 1, VKTypes.normal),
      new HLItem(VK.E, Hands.Left, Fingers.F2, 0, 1, VKTypes.normal),
      new HLItem(VK.R, Hands.Left, Fingers.F1, 0, 1, VKTypes.normal),
      new HLItem(VK.T, Hands.Left, Fingers.F1, 1, 1, VKTypes.normal),
      new HLItem(VK.Y, Hands.Right, Fingers.F1, -1, 1, VKTypes.normal),
      new HLItem(VK.U, Hands.Right, Fingers.F1, 0, 1, VKTypes.normal),
      new HLItem(VK.I, Hands.Right, Fingers.F2, 0, 1, VKTypes.normal),
      new HLItem(VK.O, Hands.Right, Fingers.F3, 0, 1, VKTypes.normal),
      new HLItem(VK.P, Hands.Right, Fingers.F4, 0, 1, VKTypes.normal),
      new HLItem(VK.Oem4, Hands.Right, Fingers.F4, 1, 1, VKTypes.normal), //  [{
      new HLItem(VK.Oem6, Hands.Right, Fingers.F4, 2, 1, VKTypes.normal), //  ]}
      new HLItem(VK.Oem5, Hands.Right, Fingers.F4, 3, 1, VKTypes.normal), //  \|

      new HLItem(VK.A, Hands.Left, Fingers.F4, 0, 0, VKTypes.normal),
      new HLItem(VK.S, Hands.Left, Fingers.F3, 0, 0, VKTypes.normal),
      new HLItem(VK.D, Hands.Left, Fingers.F2, 0, 0, VKTypes.normal),
      new HLItem(VK.F, Hands.Left, Fingers.F1, 0, 0, VKTypes.normal),
      new HLItem(VK.G, Hands.Left, Fingers.F1, 1, 0, VKTypes.normal),
      new HLItem(VK.H, Hands.Right, Fingers.F1, -1, 0, VKTypes.normal),
      new HLItem(VK.J, Hands.Right, Fingers.F1, 0, 0, VKTypes.normal),
      new HLItem(VK.K, Hands.Right, Fingers.F2, 0, 0, VKTypes.normal),
      new HLItem(VK.L, Hands.Right, Fingers.F3, 0, 0, VKTypes.normal),
      new HLItem(VK.Oem1, Hands.Right, Fingers.F4, 0, 0, VKTypes.normal), //  ;:
      new HLItem(VK.Oem7, Hands.Right, Fingers.F4, 1, 0, VKTypes.normal), // '"

      new HLItem(VK.Z, Hands.Left, Fingers.F4, 0, -1, VKTypes.normal),
      new HLItem(VK.X, Hands.Left, Fingers.F3, 0, -1, VKTypes.normal),
      new HLItem(VK.C, Hands.Left, Fingers.F2, 0, -1, VKTypes.normal),
      new HLItem(VK.V, Hands.Left, Fingers.F1, 0, -1, VKTypes.normal),
      new HLItem(VK.B, Hands.Left, Fingers.F1, 1, -1, VKTypes.normal),
      new HLItem(VK.N, Hands.Right, Fingers.F1, -1, -1, VKTypes.normal),
      new HLItem(VK.M, Hands.Right, Fingers.F1, 0, -1, VKTypes.normal),
      new HLItem(VK.OemComma, Hands.Right, Fingers.F2, 0, -1, VKTypes.normal),
      new HLItem(VK.OemPeriod, Hands.Right, Fingers.F3, 0, -1, VKTypes.normal),
      new HLItem(VK.Oem2, Hands.Right, Fingers.F4, 0, -1, VKTypes.normal), // /?

      new HLItem(VK.Space, Hands.Left, Fingers.F0, 0, 0, VKTypes.extra),
      new HLItem(VK.RightSpace, Hands.Right, Fingers.F0, 0, 0, VKTypes.extra),

      new HLItem(VK.Shift, Hands.Left, Fingers.F4, -1, -1, VKTypes.extra),
      new HLItem(VK.RightShift, Hands.Right, Fingers.F4, 1, -1, VKTypes.extra),

      new HLItem(VK.Ctrl, Hands.Left, Fingers.F4, -1, -2, VKTypes.extra),
      new HLItem(VK.RightCtrl, Hands.Right, Fingers.F4, 1, -2, VKTypes.extra),

      new HLItem(VK.Alt, Hands.Left, Fingers.F0, -1, 0, VKTypes.extra),
      new HLItem(VK.RightAlt, Hands.Right, Fingers.F0, 1, 0, VKTypes.extra),
    ];
    console.log(temproryItems);
  }

  loadLL() {
    // TODO Вынести в отдельный сервис
    const temproryLLItems: LLItem[] = [

      // Modifiers - None
      new LLItem(VK.Oem3, 'ё', 0, 0, 0),


      new LLItem (VK.D1, '1', 0, 0, 0 ),
      new LLItem (VK.D2, '2', 0, 0, 0 ),
      new LLItem (VK.D3, '3', 0, 0, 0 ),
      new LLItem (VK.D4, '4', 0, 0, 0 ),
      new LLItem (VK.D5, '5', 0, 0, 0 ),
      new LLItem (VK.D6, '6', 0, 0, 0 ),
      new LLItem (VK.D7, '7', 0, 0, 0 ),
      new LLItem (VK.D8, '8', 0, 0, 0 ),
      new LLItem (VK.D9, '9', 0, 0, 0 ),
      new LLItem (VK.D0, '0', 0, 0, 0 ),
      new LLItem (VK.OemMinus, '-', 0, 0, 0 ), // -_
      new LLItem (VK.OemPlus, '=', 0, 0, 0 ), //  =+

      new LLItem (VK.Q, 'й', 0, 0, 0 ),
      new LLItem (VK.W, 'ц', 0, 0, 0 ),
      new LLItem (VK.E, 'у', 0, 0, 0 ),
      new LLItem (VK.R, 'к', 0, 0, 0 ),
      new LLItem (VK.T, 'е', 0, 0, 0 ),
      new LLItem (VK.Y, 'н', 0, 0, 0 ),
      new LLItem (VK.U, 'г', 0, 0, 0 ),
      new LLItem (VK.I, 'ш', 0, 0, 0 ),
      new LLItem (VK.O, 'щ', 0, 0, 0 ),
      new LLItem (VK.P, 'з', 0, 0, 0 ),
      new LLItem (VK.Oem4, 'х', 0, 0, 0 ), //  [(
      new LLItem (VK.Oem6, 'ъ', 0, 0, 0 ), //  ])
      new LLItem (VK.Oem5, '\\', 0, 0, 0 ), //  \|

      new LLItem (VK.A, 'ф', 0, 0, 0 ),
      new LLItem (VK.S, 'ы', 0, 0, 0 ),
      new LLItem (VK.D, 'в', 0, 0, 0 ),
      new LLItem (VK.F, 'а', 0, 0, 0 ),
      new LLItem (VK.G, 'п', 0, 0, 0 ),
      new LLItem (VK.H, 'р', 0, 0, 0 ),
      new LLItem (VK.J, 'о', 0, 0, 0 ),
      new LLItem (VK.K, 'л', 0, 0, 0 ),
      new LLItem (VK.L, 'д', 0, 0, 0 ),
      new LLItem (VK.Oem1, 'ж', 0, 0, 0 ), //  ;:
      new LLItem (VK.Oem7, 'э', 0, 0, 0 ), // '"

      new LLItem (VK.Z, 'я', 0, 0, 0 ),
      new LLItem (VK.X, 'ч', 0, 0, 0 ),
      new LLItem (VK.C, 'с', 0, 0, 0 ),
      new LLItem (VK.V, 'м', 0, 0, 0 ),
      new LLItem (VK.B, 'и', 0, 0, 0 ),
      new LLItem (VK.N, 'т', 0, 0, 0 ),
      new LLItem (VK.M, 'ь', 0, 0, 0 ),
      new LLItem (VK.OemComma, 'б', 0, 0, 0 ),
      new LLItem (VK.OemPeriod, 'ю', 0, 0, 0 ),
      new LLItem (VK.Oem2, '.', 0, 0, 0 ),  // /?


      // Modifiers - Shift
      new LLItem (VK.Oem3, 'Ё', 1, 0, 0 ), // ` ~
      new LLItem (VK.D1, '!', 1, 0, 0 ),
      new LLItem (VK.D2, '\u0022', 1, 0, 0 ),
      new LLItem (VK.D3, '№', 1, 0, 0 ),
      new LLItem (VK.D4, ';', 1, 0, 0 ),
      new LLItem (VK.D5, '%', 1, 0, 0 ),
      new LLItem (VK.D6, ':', 1, 0, 0 ),
      new LLItem (VK.D7, '?', 1, 0, 0 ),
      new LLItem (VK.D8, '*', 1, 0, 0 ),
      new LLItem (VK.D9, '(', 1, 0, 0 ),
      new LLItem (VK.D0, ')', 1, 0, 0 ),
      new LLItem (VK.OemMinus, '_', 1, 0, 0 ), // -_
      new LLItem (VK.OemPlus, '+', 1, 0, 0 ), //  =+

      new LLItem (VK.Q, 'Й', 1, 0, 0 ),
      new LLItem (VK.W, 'Ц', 1, 0, 0 ),
      new LLItem (VK.E, 'У', 1, 0, 0 ),
      new LLItem (VK.R, 'К', 1, 0, 0 ),
      new LLItem (VK.T, 'Е', 1, 0, 0 ),
      new LLItem (VK.Y, 'Н', 1, 0, 0 ),
      new LLItem (VK.U, 'Г', 1, 0, 0 ),
      new LLItem (VK.I, 'Ш', 1, 0, 0 ),
      new LLItem (VK.O, 'Щ', 1, 0, 0 ),
      new LLItem (VK.P, 'З', 1, 0, 0 ),
      new LLItem (VK.Oem4, 'Х', 1, 0, 0 ), //  [(
      new LLItem (VK.Oem6, 'Ъ', 1, 0, 0 ), //  ])
      new LLItem (VK.Oem5, '/', 1, 0, 0 ), //  \|

      new LLItem (VK.A, 'Ф', 1, 0, 0 ),
      new LLItem (VK.S, 'Ы', 1, 0, 0 ),
      new LLItem (VK.D, 'В', 1, 0, 0 ),
      new LLItem (VK.F, 'А', 1, 0, 0 ),
      new LLItem (VK.G, 'П', 1, 0, 0 ),
      new LLItem (VK.H, 'Р', 1, 0, 0 ),
      new LLItem (VK.J, 'О', 1, 0, 0 ),
      new LLItem (VK.K, 'Л', 1, 0, 0 ),
      new LLItem (VK.L, 'Д', 1, 0, 0 ),
      new LLItem (VK.Oem1, 'Ж', 1, 0, 0 ), //  ;:
      new LLItem (VK.Oem7, 'Э', 1, 0, 0 ), // '"

      new LLItem (VK.Z, 'Я', 1, 0, 0 ),
      new LLItem (VK.X, 'Ч', 1, 0, 0 ),
      new LLItem (VK.C, 'С', 1, 0, 0 ),
      new LLItem (VK.V, 'М', 1, 0, 0 ),
      new LLItem (VK.B, 'И', 1, 0, 0 ),
      new LLItem (VK.N, 'Т', 1, 0, 0 ),
      new LLItem (VK.M, 'Ь', 1, 0, 0 ),
      new LLItem (VK.OemComma, 'Б', 1, 0, 0 ),
      new LLItem (VK.OemPeriod, 'Ю', 1, 0, 0 ),
      new LLItem (VK.Oem2, ',', 1, 0, 0 ),  // /?
      new LLItem (VK.Space, ' ', 0, 0, 0 ),  // Space

    ];

    console.log(temproryLLItems);
  }
  ngOnInit() {
  }

}
