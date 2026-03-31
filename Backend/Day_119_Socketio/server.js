import { log } from "console";
import app from "./src/app.js"
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  console.log("new connection created");
  socket.on("message",(msg)=>{
    console.log("user fired message event");
    console.log(msg); 
    io.emit("abc",msg)
  })

  
});
// server pr ke new connection bnanoge or callback ko chlaoge



httpServer.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


// task ->learn these events
// socket.emit()
// socket.broadcast().emit()
// io.emit()



// in => means server
// socket => means single user

// on=> means event ko listen
// emit =>means event ko fire krna