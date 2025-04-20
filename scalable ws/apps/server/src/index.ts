import { WebSocket, WebSocketServer } from 'ws';
import {createClient} from 'redis';

import dotenv from 'dotenv'
dotenv.config()
const pub=createClient({
    url:"redis://localhost:6379",
})
const sub= pub.duplicate()
const clients = new Set<WebSocket>();

const messanger = async ()=>{
    await pub.connect()
    await sub.connect()
    const wss = new WebSocketServer({ port :8080 });
    console.log("websocket running")

    await sub.subscribe("Message",(data)=>{
        clients.forEach((client)=>{
            client.send(data)
        })
    })
    

wss.on('connection', async function connection(ws) {
  ws.on('error', console.error);
  clients.add(ws)

  ws.on('message', function message(data:string) {
    pub.publish("Message",data)
});



})}
messanger()