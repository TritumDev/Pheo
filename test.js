const { Client } = require('./index');
const pheo = new Client();
pheo.on("connected", () => {
  console.log("Connected to Pheonix Aultum")
  pheo.discord.subscribe("376901199225552898")
  pheo.discord.on("update", (d) => console.log("Spotify Data:", d.spotify))
});
