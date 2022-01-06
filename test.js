const Pheo = require('./index');

const pheo = new Pheo()
pheo.discord.subscribe(["376901199225552898", "209796601357533184"]).then(console.log)
pheo.discord.on("update", (d) => console.log(d.spotify))
