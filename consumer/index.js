const express = require('express');
const mqCon = require('./controller/rabbitmq');

const app = express()
const port = 3001

app.get('/con', (req, res) => {

    mqCon.consumer('my_exchange', 'queueTest', 'test', (msg) => {  
    console.log(`\n[X] Message receved: ${msg.content}`);
    res.end(`\n[X] Message recived: ${msg.content}`);
    });
  });

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });