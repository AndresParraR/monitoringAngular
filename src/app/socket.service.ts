import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { io } from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) {}

  // sendMessage(msg: string) {
  //   this.socket.emit('message', msg);
  // }

  io = io("http://localhost:4501",{
    withCredentials: false,
    autoConnect: true
  })
}
