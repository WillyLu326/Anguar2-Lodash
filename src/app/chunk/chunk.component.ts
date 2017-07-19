import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.css']
})
export class ChunkComponent implements OnInit {

  array: any[];
  chunkedArray: any[];


  constructor() { }

  ngOnInit() {
    this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.chunkedArray = _.chunk(this.array, 4);
    console.log(this.chunkedArray);
  }

}
