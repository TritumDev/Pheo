const EventEmitter = require('events');
const socketio = require('socket.io-client');
const fetch = require('node-fetch');

const API_URL = "https://pheonixapi.com/api"
const WEBSOCKET_URL = "https://pheonixapi.com/"
module.exports = class Pheo extends EventEmitter {
  constructor(options) {
    super()
    this.API_KEY = options?.API_KEY || ""
    this.io = socketio(WEBSOCKET_URL, {
      auth: {
        token: this.API_KEY
      }
    })

    this.discord = new (require("./subs/discord"))(this)
    this.io.on("connect", (d) => this.emit("gateway:connected", {
      event: "connected to gateway",
      id: this.io.id
    }))
  }
  async _get(url, options) {
    options = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${this.API_KEY}`
      },
      ...options
    }
    return fetch(API_URL + url, options).then(res => res.json())
  }
}