import {OnInit, Component} from '@angular/core';
import { SocketService } from '../socket.service';

import { Store } from '@ngrx/store';
import { setValues } from "../state/values.actions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private socket: SocketService, private store: Store<{values: { values:Array<any> } }>){}
  
  values = [1,2,3,4,5,6,7]

  ngOnInit(): void {
    this.socket.io.on("NEW_VALUES", data => {
      this.store.dispatch(setValues({newValues: data}))
    })
  }

  counter(i: number) {
    return new Array(i);
  }

}