const express = require('express');
//#iclude <iostream>

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('This is the first page');
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});


app.get('/users', (req, res) => {
  res.send('A list of users!');
});

app.listen(PORT, HOST, () => {
  console.log('Mahmoud Omar Aly Elmekawy .');
});
