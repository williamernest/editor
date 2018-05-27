import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { AppComponent } from './app.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { MixinParserComponent } from './mixin-parser/mixin-parser.component';
import { MixinListItemComponent } from './mixin-list-item/mixin-list-item.component';
import { DisplayCssComponent } from './display-css/display-css.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    MixinParserComponent,
    MixinListItemComponent,
    DisplayCssComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    FormsModule
      ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
