import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  array1: any[];
  array2: any[];
  concatedArray: any[];

  constructor() { }

  ngOnInit() {
    this.array1 = [1, 2, 3];
    this.array2 = [4, 5, 6];
    this.concatedArray = _.concat(this.array1, this.array2);
  }

}
