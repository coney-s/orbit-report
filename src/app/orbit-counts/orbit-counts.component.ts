import { Component, OnInit, Input } from '@angular/core';
import {Satellite} from '../satellite';


@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  matchingType: [] = [];
  total: number;
  
  
  constructor() {
    
   }

  ngOnInit() {
  }

  count(typeName: string): number {
    let matchingTypes = [];
    typeName = typeName.toLowerCase();
    for (let i = 0; i <this.satellites.length; i++) {
      let type = this.satellites[i].type.toLowerCase();
      if (type === typeName) {
        matchingTypes.push(type);
      }
    }
    this.total = matchingTypes.length;
    return this.total;
  }
}
 





