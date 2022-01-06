const EventEmitter = require("events")

module.exports = class Discord extends EventEmitter {
  constructor(options) {
    super()
    this.master = options
    this.io = options.io

    this.subscriptions = []

    this.io.on("connect", () => this.subscribe(this.subscriptions))

    this.io.on("discord:user:subscribed", (d) => this.master.emit("subscribed", { event: "subvscr" }))
    this.io.on("discord:user:update", (d) => this.emit("update", d))
  }
  async subscribe(userId) {
    if (!userId) return false
    let d = (userId instanceof Array ? userId : [userId]).map(id => { this.io.emit("discord:user:subscribe", { userId: id }); if (!this.subscriptions.includes(id)) this.subscriptions.push(id); return id })
    return d
  }

  // RawAPIs
  async getUser(userId) {
    return this.master._get(`/discord/user/${userId}`)
  }

}