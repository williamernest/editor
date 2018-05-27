import { Component, OnInit, Input, ChangeDetectorRef, ElementRef} from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display-css',
  templateUrl: './display-css.component.html',
  styleUrls: ['./display-css.component.css']
})
export class DisplayCssComponent implements OnInit {

  @Input()
  mixin: any;
  constructor(private el: ElementRef,
    private ref: ChangeDetectorRef,
    private service : HighlightJsService,
    private http: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.service.highlight(this.el.nativeElement.querySelector('.scss'));
  }

  get value() {
    if(!this.mixin) return '';
    return this.parseList(this.mixin.filter(data => data.mixinTypes.filter((item) => item.value !== "").length > 0));
  }

  set value(val) {
    this.mixin = val;
    this.ref.detectChanges();
  }

  parseList(val) {
    const obj = {};
    const mixinsWithProperties = val.forEach((mixin) => {
      const props = mixin.mixinTypes.map((data) => data.value);
      obj[mixin.mixinName] = props.join(', ');
    });

    return this.prettyPrint(obj);
  }

  prettyPrint(val) {
    let css = '#demo-component {\n';
    for(const prop in val) {
      css += `  @include ${prop}(${val[prop]}); \n`;
    }
    css += '\n }\n';

    return css;
  }


  async compileCss(css = this.value) {
    if(!css) return;
     const data = {
        code: '@import "@material/textfield/mixins";\n ' + css,
     };
     this.http.post('/api/compile/scss', {data: data}).subscribe((response) => {
       const ele = document.getElementById('demo-class');
       if(ele) {
         ele.parentElement.removeChild(ele);
       }
       if(response['data']){
         let ss = document.getElementsByTagName('head')[0].innerHTML;
         ss += `<style type="text/css" id="demo-class">${response['data']}</script>`;
         document.getElementsByTagName('head')[0].innerHTML = ss;
      }
     });
  }
}
