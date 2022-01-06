
# Pheo

---

The official API wrapper for https://pheonixapi.com

  

this wrapper includes many of the routes that Phoenix has including the WebSocket server so you can get updates on users fast and quickly

 
## Discord Functions
Pheonix offers the ability to get Realtime user data from our discord server, this includes presences, connections and so much more!

Using the WebSocket server (Pheonix **Aultum**)
> When you create a new instance of Pheo, it will automatically connect you to our gateway (The ability to disable this will be added later on) all you need to do is subscribe to either a single user, or an array of them

To use Pheonix Aultum, you should initiate the subscription by this:
```js
const Pheo = require("pheo")
const pheo = new Pheo("API Key") // No API key is required for Aultum Presence to work, its just run&go

pheo.discord.subscribe("Your Discord User ID") // This can be any user that is in the Tritum Server
// This can also be an array of user ID's if you are trying to monitor multiple users at once

// Note: You can only track users that are in the Tritum Discord Server
pheo.discord.on("update", (d) =>  console.log(d))
```
this block of code will get you set up with some of the basics of the Aultum server, we run entirely on subscription based services with our sockets. In the event that you lose connection with Aultum, this NPM will automatically resubscribe the users that you were subscribed to before you lost connection, so you do not need to worry about reconnecting the user after a server restart