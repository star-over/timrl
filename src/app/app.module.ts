import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeysGridComponent } from './grid/keys-grid/keys-grid.component';
import { KeysGridItemComponent } from './grid/keys-grid-item/keys-grid-item.component';
import { KeysGridArrowComponent } from './grid/keys-grid-arrow/keys-grid-arrow.component';
import { HandComponent } from './hand/hand/hand.component';
import { HandItemComponent } from './hand/hand-item/hand-item.component';
import { ScrollTextComponent } from './scroll-text/scroll-text.component';

@NgModule({
  declarations: [
    AppComponent,
    KeysGridComponent,
    KeysGridItemComponent,
    KeysGridArrowComponent,
    HandComponent,
    HandItemComponent,
    ScrollTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
