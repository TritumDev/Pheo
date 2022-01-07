import { EventEmitter } from 'events';

import { connect } from "socket.io-client"
import Discord from './src/Discord';

const API_URL = "https://pheonixapi.com/api"
const WEBSOCKET_URL = "https://pheonixapi.com/"
class Pheo extends EventEmitter {
  discord: Discord;
  io: any;
  constructor(master: object) {
    super()

    this.io = connect(WEBSOCKET_URL, {
      auth: {
        token: WEBSOCKET_URL
      }
    })
    this.io.on("connect", () => this.emit("connected", { id: this.io.id }))


    this.discord = new Discord(this)
  }
}
export { Pheo as Client }
