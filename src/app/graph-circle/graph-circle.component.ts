import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-graph-circle',
  templateUrl: './graph-circle.component.html',
  styleUrls: ['./graph-circle.component.css']
})
export class GraphCircleComponent implements OnInit {
  @Input() data:any
  @Input() index:any

  constructor(private store: Store<{values: { values:Array<any> } }>) { }

  ngOnInit(): void {
    this.store.select('values').subscribe((data:any) => {
      this.data = data.values[this.index]
    })
  }

}
