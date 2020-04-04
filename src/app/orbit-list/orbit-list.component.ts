import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
    @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
   for (let i = 0; i < this.satellites.length; i++) {
     
    this.satellites.sort(function compare(a: Satellite, b: Satellite): number {
       if (a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
          return 0;
    });

  }

  }
}
