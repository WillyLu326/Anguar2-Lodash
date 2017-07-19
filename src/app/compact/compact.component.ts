import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-compact',
  templateUrl: './compact.component.html',
  styleUrls: ['./compact.component.css']
})
export class CompactComponent implements OnInit {

  array: any[];
  compactedArray: any[];

  constructor() { }

  ngOnInit() {
    this.array = [1, 2, 3, 0, null, '', undefined, false, 'willy'];
    this.compactedArray = _.compact(this.array);
  }

}
