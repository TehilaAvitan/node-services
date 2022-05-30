const express = require('express');
const mq = require('./controller/rabbitmq');

const app = express()
const port = 3000

app.get('/pro', (req, res) => {

  mq.publish('my_exchange', 'test', 'Hi, Yocheved!')
  res.end('The message sent!');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });