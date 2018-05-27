import { Component, OnInit, ViewChild } from '@angular/core';
import {MDCTextField} from '@material/textfield';
import '@material/textfield/dist/mdc.textfield.css'

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: [
    '../../../node_modules/@material/textfield/dist/mdc.textfield.min.css',
    './text-field.component.css']
})
export class TextFieldComponent implements OnInit {

  @ViewChild('myname')
  myElement;
  textField: MDCTextField;
  label: String = 'My Label';

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.textField = new MDCTextField(this.myElement.nativeElement);
  }
}
