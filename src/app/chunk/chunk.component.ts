import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-chunk',
  templateUrl: './chunk.component.html',
  styleUrls: ['./chunk.component.css']
})
export class ChunkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let chunkedArray = _.chunk(array, 4);
    console.log(chunkedArray);
  }

}
