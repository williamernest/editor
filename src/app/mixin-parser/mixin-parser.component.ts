import { Component, Input, OnInit, ChangeDetectorRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mixin-parser',
  templateUrl: './mixin-parser.component.html',
  styleUrls: ['./mixin-parser.component.css']
})
export class MixinParserComponent implements OnInit {

  @Input()
  list: any;
  constructor(private http: HttpClient, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.http.get('/mixins/textfield/_mixins.scss', {responseType: 'text'}).subscribe((response) => {
      const tempList = this.parseResponse(response);
      this.list = tempList;
      this.ref.detectChanges();

      // const data = {
      //   code: '@import "@material/textfield/mixins";\n .helloworld {@include mdc-text-field-box-corner-radius(10px)}',
      // };
      // this.http.post('/api/compile/scss', {data: data}).subscribe((response) => console.log(response));
    });
  }

  parseResponse(response) {
    return response.split('\n')
        .filter(item => item.startsWith('@mixin'))
        .filter(mixin => {
          const temp = mixin.split('(')[0];
          return !temp.endsWith('_') && !temp.endsWith('{');
        }).map(data => {
          const myRegexp = /(?<=\$).*(?=[)])/g;
          const match = myRegexp.exec(data);
          const name = data.substring(data.indexOf('mdc'), data.indexOf('('));
          const types = match[0].split(',').map((data) => {return {name: data, value: ''}});
          return {
            mixinName: name,
            mixinTypes: types,
            original: data
          }
        })
  }
}
