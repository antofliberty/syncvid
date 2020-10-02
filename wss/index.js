const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8889 });

wss.on('connection', function connection(ws) {
    
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    wss.broadcast(message, ws);
  });

  ws.send('connected');
});

wss.broadcast = function broadcast(msg, sender) {
    wss.clients.forEach(function each(client) {
        if (client !== sender) { client.send(msg); }
     });
 };