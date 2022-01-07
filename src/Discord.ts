import { EventEmitter } from 'events';

interface Master {
  io: Object
}

export default class Discord extends EventEmitter {
  io: any;
  subscriptions: any[] = [];
  constructor(master: Master) {
    super()
    this.io = master.io

    this.subscriptions = []

    this.io.on("connect", () => this.subscribe(this.subscriptions))

    // Discord Functions
    this.io.on("discord:user:subscribed", () => this.emit("subscribed", { event: "subscription established" }))
    this.io.on("discord:user:update", (d: object) => this.emit("update", d))

  }
  async subscribe(userId: string | Array<string>) {
    if (!userId) return false
    return (userId instanceof Array ? userId : [userId]).map((id) => {
      this.io.emit("discord:user:subscribe", { userId: id });
      if (!this.subscriptions.includes(id)) this.subscriptions.push(id);
      return id
    })
  }
}