import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mixin-list-item',
  templateUrl: './mixin-list-item.component.html',
  styleUrls: ['./mixin-list-item.component.css']
})
export class MixinListItemComponent implements OnInit {

  @Input()
  mixin: any;

  @Output()
  mixinChange = new EventEmitter();

  _inputValue: any;
  checked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onChange() {
    this.mixinChange.next(this.mixin);
  }
}
